from src.main.repositories.question_repository import QuestionRepository


class QuestionService:

    def __init__(self, repository: QuestionRepository):
        self.repository = repository

    def get_questions_by_assessment(
        self,
        id_assessment: int
    ):
        questions = self.repository.get_questions_by_assessment(
            id_assessment
        )

        if questions is None:
            raise ValueError("Assessment não encontrado")

        return questions