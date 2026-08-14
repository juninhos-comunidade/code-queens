from pydantic import BaseModel
from typing import List

class ResultTestResponse(BaseModel):
    index: int
    titleTest: str
    date: str
    stacks: List[str]
    progress: int
