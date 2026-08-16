from uuid import UUID

from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy import ForeignKey, Integer, func, String
from sqlalchemy.orm import Mapped, mapped_column

from src.main.database.orm import Base


class ResultTest(Base):
    __tablename__ = "result_test"
    __table_args__ = {
        "schema": "core"
    }

    id_result_test: Mapped[int] = mapped_column(
        "id",
        Integer,
        primary_key=True,
        autoincrement=True
    )

    id_assessments: Mapped[UUID] = mapped_column(
        "id_assessments",
        ForeignKey("core.assessments_history.id"),
        nullable=False
    )

    id_stacks: Mapped[int] = mapped_column(
        "id_stacks",
        Integer,
        ForeignKey("core.stacks.id"),
        nullable=False
    )

    id_recommendations: Mapped[int | None] = mapped_column(
        "id_recommendations",
        Integer,
        ForeignKey("core.study_recommendations.id"),
        nullable=True
    )

    score_stacks: Mapped[int | None] = mapped_column(
        "score_stacks",
        Integer,
        nullable=True
    )
    classification: Mapped[dict] = mapped_column(
        JSONB,
        nullable=True
    )
    stack_name: Mapped[str] = mapped_column(
        String(100), 
        nullable=True
    )
    recommendation_description: Mapped[str] = mapped_column(
        String, 
        nullable=True
    )