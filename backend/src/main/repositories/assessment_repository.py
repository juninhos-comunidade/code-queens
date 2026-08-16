from datetime import datetime
from sqlalchemy.orm import Session
from uuid import UUID
from sqlalchemy import func
from sqlalchemy.orm.attributes import flag_modified
from src.main.entities.assessments_history import AssessmentsHistory
from src.main.entities.question_option import QuestionOption
from src.main.entities.questions_stacks import QuestionStack
from src.main.entities.result_test import ResultTest
from src.main.entities.study_recommendation import StudyRecommendation
from src.main.entities.assessments_stacks import AssessmentsStacks
from src.main.entities.stacks import Stacks  

class AssessmentsRepository:
    def __init__(self, db: Session):
        self.db = db

    def _get_classification_label(self, percentage: int) -> str:
        """Retorna a senioridade baseada no percentual."""
        if percentage <= 39:
            return {
                "level": "Iniciante",
                "title": "Continue praticando para construir uma base sólida!",
                "subtitle": (
                    "Você está dando os primeiros passos e já começou a desenvolver "
                    "seus conhecimentos. Foque nos tópicos abaixo para evoluir ainda mais."
                )
            }

        elif percentage <= 64:
            return {
                "level": "Básico",
                "title": "Continue estudando para fortalecer sua base!",
                "subtitle": (
                    "Você já possui uma boa base e está desenvolvendo suas habilidades. "
                    "Foque nos tópicos abaixo para evoluir ainda mais."
                )
            }

        elif percentage <= 84:
            return {
                "level": "Intermediário",
                "title": "Continue estudando para alcançar o nível avançado!",
                "subtitle": (
                    "Você demonstra uma base sólida e compreensão prática. "
                    "Foque nos tópicos abaixo para evoluir ainda mais."
                )
            }

        else:
            return {
                "level": "Avançado",
                "title": "Continue praticando para alcançar a excelência!",
                "subtitle": (
                    "Você demonstra domínio dos principais conceitos e boa experiência "
                    "prática. Foque nos tópicos abaixo para evoluir ainda mais."
                )
            }

    def _get_stack_recommendation(self, stack_id: int, percentage: int):
        """Busca a recomendação de estudo ideal baseada na nota da stack."""
        recommendation = (
            self.db.query(StudyRecommendation)
            .filter(
                StudyRecommendation.id_stacks == stack_id,
                StudyRecommendation.score_min <= percentage,
                StudyRecommendation.score_max >= percentage
            )
            .first()
        )
        
        rec_id = recommendation.id_recommendations if recommendation else None
        rec_desc = recommendation.recommendations_descriptions if recommendation else "Sem recomendação cadastrada para esta faixa."
        
        return rec_id, rec_desc

    def create_assessment(self, assessment_data):
        now = datetime.utcnow()
        titulo_dinamico = f"Avaliação {now.strftime('%d%m%Y%H%M%S')}"

        assessment = AssessmentsHistory(
            id_users=assessment_data.id_users,
            id_levels=assessment_data.id_levels,
            title=titulo_dinamico
        )
        
        self.db.add(assessment)
        self.db.flush()

        stacks_lista=[]

        for id_stack in assessment_data.id_stacks:
            assessment_stack = AssessmentsStacks(
                id_assessments=assessment.id_assessments,
                id_stacks=id_stack
            )
            self.db.add(assessment_stack)
            stacks_lista.append(id_stack)


        self.db.commit()
        self.db.refresh(assessment)
        
        return {
                    "id_assessments": assessment.id_assessments,
                    "id_users": assessment.id_users,
                    "id_levels": assessment.id_levels,
                    "date_assessments": assessment.date_assessments,
                    "score": assessment.score,
                    "start_time": assessment.start_time,
                    "end_time": assessment.end_time,
                    "title": assessment.title,
                    "id_stacks": stacks_lista 
                }

    def submit_and_calculate_assessment(self, assessment_id: UUID, user_id: UUID, id_stacks: list[int], answers: list):
        total_questions = len(answers)
    
        assessment = (
            self.db.query(AssessmentsHistory)
            .filter(
                AssessmentsHistory.id_assessments == assessment_id,
                AssessmentsHistory.id_users == user_id 
            )
            .first()
        )
        
        if not assessment:
            raise ValueError("Prova não encontrada ou não pertence a este usuário.")

        stack_scores = {stack_id: {"obtained": 0, "max": 0} for stack_id in id_stacks}

        for answer in answers:
            q_id = answer.get("id_question") if isinstance(answer, dict) else answer.id_question
            alt_id = answer.get("id_alternative") if isinstance(answer, dict) else answer.id_alternative

            question_stack = (
                self.db.query(QuestionStack)
                .filter(QuestionStack.id_questions == q_id)
                .first()
            )
            if not question_stack or question_stack.id_stacks not in stack_scores:
                continue
            
            q_stack_id = question_stack.id_stacks

            option = (
                self.db.query(QuestionOption)
                .filter(QuestionOption.id_question == q_id, QuestionOption.id_alternative == alt_id)
                .first()
            )
            
            if option:
                stack_scores[q_stack_id]["obtained"] += getattr(option, "answer_weight", 0)

            max_weight = (
                self.db.query(func.max(QuestionOption.answer_weight))
                .filter(QuestionOption.id_question == q_id)
                .scalar()
            ) or 1
            
            stack_scores[q_stack_id]["max"] += max_weight

        results_data = []
        stack_percentages = [] 

        for stack_id in id_stacks:
            obtained = stack_scores[stack_id]["obtained"]
            max_score = stack_scores[stack_id]["max"]
            
            stack_percent = int((obtained / max_score) * 100) if max_score > 0 else 0
            stack_percentages.append(stack_percent)
            
            classification = self._get_classification_label(stack_percent)
            rec_id, rec_desc = self._get_stack_recommendation(stack_id, stack_percent)

            stack_info = self.db.query(Stacks).filter(Stacks.id == stack_id).first()
            stack_name = stack_info.stacks_name if stack_info else f"Stack {stack_id}"

            result_test = ResultTest(
                id_assessments=assessment_id,
                id_stacks=stack_id,
                id_recommendations=rec_id,
                score_stacks=stack_percent,
                classification=classification,
                stack_name=stack_name,
                recommendation_description=rec_desc
            )
            self.db.add(result_test)

            results_data.append({
                "stack_id": stack_id,
                "stack_name": stack_name,
                "score_percentage": stack_percent,
                "classification": classification,
                "recommendation": rec_desc
            })

        global_score = int(sum(stack_percentages) / len(stack_percentages)) if stack_percentages else 0
        global_classification = self._get_classification_label(global_score)

        assessment.score = global_score
        assessment.end_time = datetime.utcnow()

        self.db.commit()
        self.db.refresh(assessment)

        return {
            "assessment_id": assessment_id,
            "score_percentage": global_score,
            "classification": global_classification,
            "total_questions": total_questions,
            "stacks_evaluated": results_data
        }

    def update_history_title(self, assessment_id: UUID, user_id: UUID, new_title: str):
            record = (
                self.db.query(AssessmentsHistory)
                .filter(
                    AssessmentsHistory.id_assessments == assessment_id,
                    AssessmentsHistory.id_users == user_id
                )
                .first()
            )

            if not record:
                raise ValueError("Histórico da avaliação não encontrado para este usuário.")

            record.title = new_title

            flag_modified(record, "title")

            self.db.add(record)
            self.db.commit()
            self.db.refresh(record)

            return record

    def get_user_history_with_stacks(self, user_id: UUID):
          history = (
              self.db.query(AssessmentsHistory)
              .filter(AssessmentsHistory.id_users == user_id)
              .order_by(AssessmentsHistory.end_time.desc().nulls_last()) 
              .all()
          )
          
          formatted_history = []
          for h in history:
              stacks_records = (
                  self.db.query(ResultTest)
                  .filter(ResultTest.id_assessments == h.id_assessments)
                  .all()
              )
              
              stacks_list = [
                  {
                      "stack_id": s.id_stacks,
                      "stack_name": s.stack_name,
                      "score_percentage": s.score_stacks,
                      "recommendation": s.recommendation_description
                  } for s in stacks_records
              ]
              
              formatted_history.append({
                  "assessment_id": h.id_assessments,
                  "title": h.title,
                  "date": h.end_time,
                  "stacks": stacks_list,
                  "score_global": h.score
              })
              
          return formatted_history
    def get_assessment_by_id(self, assessment_id: UUID, user_id: UUID):
       
        assessment = (
            self.db.query(AssessmentsHistory)
            .filter(
                AssessmentsHistory.id_assessments == assessment_id,
                AssessmentsHistory.id_users == user_id
            )
            .first()
        )
        
        if not assessment:
            raise ValueError("Avaliação não encontrada ou não pertence a este usuário.")
            

        stacks_records = (
            self.db.query(ResultTest)
            .filter(ResultTest.id_assessments == assessment.id_assessments)
            .all()
        )
        
        stacks_list = [
            {
                "stack_id": s.id_stacks,
                "stack_name": s.stack_name,
                "score_percentage": s.score_stacks,
                "classification": s.classification,
                "recommendation": s.recommendation_description
            } for s in stacks_records
        ]
        
        return {
            "assessment_id": assessment.id_assessments,
            "title": assessment.title,
            "date": assessment.end_time,
            "score_global": assessment.score,
            "classification": self._get_classification_label(assessment.score) if assessment.score is not None else None,
            "stacks": stacks_list
        }
    