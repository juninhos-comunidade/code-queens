from pydantic import EmailStr,BaseModel

class ForgotPassword(BaseModel):
     email: EmailStr