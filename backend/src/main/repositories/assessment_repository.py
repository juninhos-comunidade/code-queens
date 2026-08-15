from datetime import datetime
from sqlalchemy.orm import Session
from uuid import UUID
from sqlalchemy import func
from sqlalchemy.orm.attributes import flag_modified
from src.main.entities.assessments_history import AssessmentsHistory
from src.main.entities.question_option import QuestionOption
from src.main.entities.result_test import ResultTest
from src.main.entities.study_recommendation import StudyRecommendation
from src.main.entities.assessments_stacks import AssessmentsStacks
from src.main.entities.stacks import Stacks  

class AssessmentsRepository:
    def __init__(self, db: Session):
        self.db = db

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

        for id_stack in assessment_data.id_stacks:
            assessment_stack = AssessmentsStacks(
                id_assessments=assessment.id_assessments,
                id_stacks=id_stack
            )
            self.db.add(assessment_stack)

        self.db.commit()
        self.db.refresh(assessment)
        
        return assessment

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

        # 2. Calcula a pontuação global e a classificação ANTES do loop
        total_score_obtained = 0
        max_possible_score = 0

        for answer in answers:
            q_id = answer.get("id_question") if isinstance(answer, dict) else answer.id_question
            alt_id = answer.get("id_alternative") if isinstance(answer, dict) else answer.id_alternative

            option = (
                self.db.query(QuestionOption)
                .filter(
                    QuestionOption.id_question == q_id,
                    QuestionOption.id_alternative == alt_id
                )
                .first()
            )
            
            if option:
                total_score_obtained += getattr(option, "answer_weight", 0)

            max_weight_for_question = (
                self.db.query(func.max(QuestionOption.answer_weight))
                .filter(QuestionOption.id_question == q_id)
                .scalar()
            ) or 1
            
            max_possible_score += max_weight_for_question

        global_score_percentage = int((total_score_obtained / max_possible_score) * 100) if max_possible_score > 0 else 0
        classification = self._get_classification_label(global_score_percentage)

        
        assessment.score = global_score_percentage
        assessment.end_time = datetime.utcnow()

        
        results_data = []

        for stack_id in id_stacks:
            stack_info = self.db.query(Stacks).filter(Stacks.id == stack_id).first()
            stack_name = stack_info.stacks_name if stack_info else f"Stack {stack_id}"

        
            recommendation = (
                self.db.query(StudyRecommendation)
                .filter(
                    StudyRecommendation.id_stacks == stack_id,
                    StudyRecommendation.score_min <= global_score_percentage,
                    StudyRecommendation.score_max >= global_score_percentage
                )
                .first()
            )

            rec_description = recommendation.recommendations_descriptions if recommendation else "Sem recomendação cadastrada para esta faixa."

        
            result_test = ResultTest(
                id_assessments=assessment_id,
                id_stacks=stack_id,
                id_recommendations=recommendation.id_recommendations if recommendation else None,
                score_stacks=global_score_percentage,
                classification=classification,
                stack_name=stack_name,
                recommendation_description=rec_description
            )
            self.db.add(result_test)

            results_data.append({
                "stack_id": stack_id,
                "stack_name": stack_name,
                "score_percentage": global_score_percentage,
                "recommendation": rec_description
            })
        
        self.db.commit()
        self.db.refresh(assessment)

        return {
            "assessment_id": assessment_id,
            "score_percentage": global_score_percentage,
            "classification": classification,
            "total_questions": total_questions,
            "stacks_evaluated": results_data
        }

    def _get_classification_label(self, percentage: int) -> str:
        if percentage <= 39:
            return "Júnior"
        elif percentage <= 64:
            return "Pleno"
        elif percentage <= 84:
            return "Sênior"
        else:
            return "Especialista"

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
              .order_by(AssessmentsHistory.end_time.desc())
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