from sqlalchemy import Boolean, ForeignKey, String, Index, Integer
from sqlalchemy.orm import Mapped, mapped_column

from src.main.database.orm import Base


class Question(Base):

    __tablename__ = "questions"

    __table_args__ = (
        Index("idx_questions_id_levels", "id_levels"),
        Index("idx_questions_enabled", "questions_enabled"),
        {"schema": "core"},
    )

    id_question: Mapped[int] = mapped_column(
        "id",
        Integer,
        primary_key=True,
        autoincrement=True
    )

    id_levels: Mapped[int] = mapped_column(
        "id_levels",
        Integer,
        ForeignKey("core.levels.id"),
        nullable=False
    )

    question_description: Mapped[str] = mapped_column(
        "questions_description",
        String,
        nullable=False
    )

    questions_enabled: Mapped[bool] = mapped_column(
        "questions_enabled",
        Boolean,
        nullable=False,
        default=True
    )