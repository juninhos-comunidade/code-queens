from pydantic import EmailStr,BaseModel

class ForgotPassword(BaseModel):
     email: EmailStr
     id_security_questions: int
