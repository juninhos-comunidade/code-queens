from sqlalchemy import String,Integer
from sqlalchemy.orm import Mapped, mapped_column

from src.main.database.orm import Base


class SecurityQuestion(Base):

    __tablename__ = "security_questions"
    __table_args__ = {"schema": "core"}

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    security_question_description: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )