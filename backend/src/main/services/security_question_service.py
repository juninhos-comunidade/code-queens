from src.main.repositories.security_question_repository import SecurityQuestionRepository

class SecurityQuestionService:
    def __init__(self, repository: SecurityQuestionRepository):
        self.repository = repository

    def list_security_questions(self):
        return self.repository.get_all_security_questions()