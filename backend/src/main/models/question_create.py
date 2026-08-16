from pydantic import BaseModel


class QuestionOptionCreate(BaseModel):
    alternative_description: str
    answer_weight: int


class QuestionCreate(BaseModel):
    id_levels: int
    questions_description: str
    id_stack: list[int]
    options: list[QuestionOptionCreate]