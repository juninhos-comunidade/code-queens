from src.main.models.assessment_create import AssessmentCreate
from src.main.repositories.assessment_repository import AssessmentsRepository
from src.main.repositories.question_repository import QuestionRepository
from uuid import UUID
from datetime import datetime
from src.main.entities.assessments_history import AssessmentsHistory

class AssessmentsService:

    def __init__(
        self,
        repository: AssessmentsRepository,
        question_repository: QuestionRepository
    ):
        self.repository = repository
        self.question_repository = question_repository

    def create_assessment(
        self,
        assessment_data: AssessmentCreate
    ):
        assessment = self.repository.create_assessment(
            assessment_data=assessment_data
        )

        questions = self.question_repository.get_questions_by_assessment(
            id_assessment=assessment.id_assessments
        )

        return {
            "assessment": assessment,
            "questions": questions
        }

    def update_history_title(
            self, 
            history_id: UUID, 
            user_id: UUID, 
            new_title: str
            ):
            updated_record = self.repository.update_history_title(
                 history_id, 
                 user_id, 
                 new_title
            )

            if not updated_record:
                raise ValueError("Histórico não encontrado ou não pertence a este usuário.")

            return updated_record

    def finalizar_prova(self, user_id: UUID, level_id: int, score: int):
            
            timestamp_str = datetime.now().strftime("%d%m%Y%H%M%S")

            titulo_dinamico = f"Avaliação {timestamp_str}"

            novo_historico = AssessmentsHistory(
                id_users=user_id,
                id_levels=level_id,
                title=titulo_dinamico,
                score=score
            )


            saved_history = self.repository.create_history(novo_historico)

            return saved_history
    def create_assessment(self, assessment_data: AssessmentCreate):

        assessment = self.repository.create_assessment(assessment_data)

        questions = self.question_repository.get_random_questions_by_stacks(
            id_level=assessment_data.id_levels, 
            id_stacks=assessment_data.id_stacks
        )

        return {
            "assessment": assessment,
            "questions": questions
        }
    def submit_assessment(self, assessment_id: UUID, submission_data):
        answers_list = [ans.dict() for ans in submission_data.answers]
        
        return self.repository.submit_and_calculate_assessment(
            assessment_id=assessment_id,
            user_id=submission_data.id_users, 
            id_stacks=submission_data.id_stacks,
            answers=answers_list
        )

    def get_user_history_with_stacks(self, user_id: UUID):
            return self.repository.get_user_history_with_stacks(user_id)