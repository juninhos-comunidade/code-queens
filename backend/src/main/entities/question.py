from sqlalchemy import Boolean, ForeignKey, String, Index
from sqlalchemy.orm import Mapped, mapped_column

from backend.src.main.database.orm import Base


class Question(Base):

    __tablename__ = "questions"
    __table_args__ = (
        Index("idx_questions_id_levels", "id_levels"),
        Index("idx_questions_enabled", "questions_enabled"),
        {"schema": "core"},
    )

    id_questions: Mapped[int] = mapped_column(primary_key=True)

    id_levels: Mapped[int] = mapped_column(
        ForeignKey("core.levels.id_levels")
    )

    questions_description: Mapped[str] = mapped_column(String(500))

    questions_enabled: Mapped[bool] = mapped_column(Boolean)