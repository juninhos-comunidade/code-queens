from sqlalchemy import ForeignKey, Integer, Index
from sqlalchemy.orm import Mapped, mapped_column

from src.main.database.orm import Base


class QuestionStack(Base):
    __tablename__ = "questions_stack"
    __table_args__ = (
        Index(
            "idx_questions_stack_question",
            "id_questions"
        ),
        Index(
            "idx_questions_stack_stack",
            "id_stacks"
        ),
        {
            "schema": "core"
        },
    )

    id_questions: Mapped[int] = mapped_column(
        Integer,
        ForeignKey("core.questions.id"),
        primary_key=True
    )

    id_stacks: Mapped[int] = mapped_column(
        Integer,
        ForeignKey("core.stacks.id"),
        primary_key=True
    )