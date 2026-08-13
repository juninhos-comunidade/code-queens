from sqlalchemy import ForeignKey, Integer, Index, String
from sqlalchemy.orm import Mapped, mapped_column

from src.main.database.orm import Base


class QuestionOption(Base):

    __tablename__ = "questions_option"

    __table_args__ = (
        Index(
            "idx_questions_option_question",
            "id_questions"
        ),
        {"schema": "core"},
    )

    id_alternative: Mapped[int] = mapped_column(
        "id",
        Integer,
        primary_key=True,
        autoincrement=True
    )

    id_question: Mapped[int] = mapped_column(
        "id_questions",
        Integer,
        ForeignKey("core.questions.id"),
        nullable=False
    )

    alternative_description: Mapped[str] = mapped_column(
        "alternative_description",
        String,
        nullable=False
    )

    answer_weight: Mapped[int] = mapped_column(
        "answer_weight",
        Integer,
        nullable=False
    )