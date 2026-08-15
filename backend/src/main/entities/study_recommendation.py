from sqlalchemy import ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from src.main.database.orm import Base

class StudyRecommendation(Base):
    __tablename__ = "study_recommendations" 
    __table_args__ = {
        "schema": "core"
    }

    id_recommendations: Mapped[int] = mapped_column(
        "id",
        Integer,
        primary_key=True,
        autoincrement=True
    )

    id_stacks: Mapped[int] = mapped_column(
        "id_stacks",
        Integer,
        ForeignKey("core.stacks.id"),
        nullable=False
    )

    score_max: Mapped[int] = mapped_column(
        "score_max",
        Integer,
        nullable=True
    )

    score_min: Mapped[int] = mapped_column(
        "score_min",
        Integer,
        nullable=True
    )

    recommendations_descriptions: Mapped[str] = mapped_column(
        "recommendations_descriptions", 
        String,
        nullable=True
    )