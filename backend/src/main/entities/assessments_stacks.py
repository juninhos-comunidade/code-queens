from sqlalchemy import ForeignKey, Integer
from sqlalchemy.orm import Mapped,mapped_column

from backend.src.main.database.orm import Base

class AssessmentsStacks(Base):
    __table_name__ = "assessments_stacks"
    __table_args__ = {"schema": "core"}

    id_assessments : Mapped[int] = mapped_column(
        ForeignKey("core.assessments_history.id"),
        primary_key=True
    )
    id_stacks: Mapped[int] = mapped_column(
        ForeignKey("core.stacks.id"),
        primary_key=True
    )