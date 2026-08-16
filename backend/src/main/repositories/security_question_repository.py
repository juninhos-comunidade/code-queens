from sqlalchemy.orm import Session
from src.main.entities.security_question import SecurityQuestion

class SecurityQuestionRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_all_security_questions(self):
        questions = self.db.query(SecurityQuestion).all()
        return [
            {
                "id": q.id,
                "security_question_description": q.security_question_description
            }
            for q in questions
        ]