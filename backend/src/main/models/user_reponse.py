from datetime import datetime
from uuid import UUID
from pydantic import BaseModel,EmailStr

class UserResponse(BaseModel):
    id_users: UUID
    full_name:str
    email: EmailStr
    uf: str
    gender: str
    id_roles: int
    created_at: datetime