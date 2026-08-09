from sqlalchemy import String, Integer,Index,ForeignKey,TIMESTAMP
from sqlalchemy.orm import mapped_column,Mapped

from uuid import UUID

from backend.src.main.database.orm import Base

class AssessmentsHistory(Base):
    __table_name__="assessments_history"
    __table_args__= (
        Index("idx_assessments_history_id_users","id_users"),
        Index("idx_assessments_history_id_levels", "id_levels"),
        Index("idx_assessments_history_id_stacks", "id_stacks"),
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
    date_assessments: Mapped[TIMESTAMP] = mapped_column(
        TIMESTAMP,
        
    )

