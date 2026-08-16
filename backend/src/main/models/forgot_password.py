from datetime import date
from pydantic import EmailStr,BaseModel


class ForgotPassword(BaseModel):
    email: EmailStr
    birth_date: date
    id_security_questions: int
    answer_security_question: str