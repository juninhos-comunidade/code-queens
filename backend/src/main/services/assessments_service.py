from src.main.models.assessment_create import AssessmentCreate
from src.main.repositories.assessment_repository import AssessmentsRepository
from src.main.repositories.question_repository import QuestionRepository


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