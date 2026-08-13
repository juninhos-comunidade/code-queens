from sqlalchemy import Integer,Index,ForeignKey,TIMESTAMP,func
from sqlalchemy.orm import mapped_column,Mapped
from datetime import datetime

from uuid import UUID

from src.main.database.orm import Base

class AssessmentsHistory(Base):
    __tablename__="assessments_history"
    __table_args__= (
        Index("idx_assessments_history_id_users","id_users"),
        Index("idx_assessments_history_id_levels", "id_levels"),
        {"schema":"core"}
    )
    id_assessments: Mapped[int] = mapped_column(
        "id",
        Integer,
        primary_key=True,
        autoincrement=True
    )
    id_users : Mapped[UUID] = mapped_column(
        "id_users",
        ForeignKey("core.users.id"),
        nullable=False
    )
    id_levels: Mapped[int] = mapped_column(
        "id_levels",
        ForeignKey("core.levels.id"),
        nullable=False,
    )
    date_assessments: Mapped[datetime] = mapped_column(
        "date_assessments",
        TIMESTAMP,
        nullable=False,
        server_default=func.current_timestamp()
    )
    score: Mapped[int | None] = mapped_column(
        "score",
        Integer,
        nullable=True
    )

    start_time: Mapped[datetime] = mapped_column(
        "start_time",
        TIMESTAMP(timezone=True),
        nullable=False,
        server_default=func.current_timestamp()
    )

    end_time: Mapped[datetime | None] = mapped_column(
        "end_time",
        TIMESTAMP(timezone=True),
        nullable=True
    )