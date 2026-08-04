from datetime import date
from pydantic import BaseModel, EmailStr, ValidationError

class UserCreate(BaseModel):
    full_name: str
    birth_date: date
    email: EmailStr
    uf: str
    gender: str
    password: str
    id_security_questions: int
    answer_security_question: str
    id_roles: int
    timezone_origem: str | None = None
