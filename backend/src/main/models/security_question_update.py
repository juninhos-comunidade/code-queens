from pydantic import BaseModel

class SecurityQuestionUpdate(BaseModel):
    id_security_questions: int
    answer_security_question: str
