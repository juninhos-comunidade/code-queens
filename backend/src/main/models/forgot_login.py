from datetime import date
from pydantic import EmailStr,BaseModel

class ForgotPassword(BaseModel):
     email: EmailStr
     birth_date: date
     answer_security_question: int
