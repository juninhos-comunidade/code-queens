from pydantic import BaseModel

class UserUpdate(BaseModel):
    full_name: str
    uf: str
    gender: str