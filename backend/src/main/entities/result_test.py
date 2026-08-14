from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Integer, func
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

    id_assessments: Mapped[int] = mapped_column(
        "id_assessments",
        Integer,
        ForeignKey("core.assessments_history.id"),
        nullable=False
    )

    id_stacks: Mapped[int] = mapped_column(
        "id_stacks",
        Integer,
        ForeignKey("core.stacks.id"),
        nullable=False
    )

    id_recommendation: Mapped[int | None] = mapped_column(
        "id_recommendation",
        Integer,
        ForeignKey("core.study_recommendation.id"),
        nullable=True
    )

    score_stacks: Mapped[int | None] = mapped_column(
        "score_stacks",
        Integer,
        nullable=True
    )

    created_at: Mapped[datetime] = mapped_column(
        "created_at",
        DateTime,
        nullable=False,
        server_default=func.current_timestamp()
    )