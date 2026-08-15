from pydantic import BaseModel
from typing import List
from uuid import UUID

class AnswerItem(BaseModel):
    id_question: int
    id_alternative: int

class AssessmentSubmit(BaseModel):
    id_users: UUID
    id_levels: int
    id_stacks: List[int]
    answers: List[AnswerItem]