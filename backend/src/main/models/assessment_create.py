from uuid import UUID

from pydantic import BaseModel


class AssessmentCreate(BaseModel):
    id_user: UUID
    id_level: int
    id_stacks: list[int]
