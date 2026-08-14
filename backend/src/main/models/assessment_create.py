from pydantic import BaseModel
from typing import List
from uuid import UUID

class AssessmentCreate(BaseModel):
    id_users: UUID
    id_levels: int
    id_stacks: List[int]