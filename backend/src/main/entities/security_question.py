from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from backend.src.main.database.orm import Base


class SecurityQuestion(Base):

    __tablename__ = "security_questions"
    __table_args__ = {"schema": "core"}

    id_security_questions: Mapped[int] = mapped_column(primary_key=True)

    security_question_description: Mapped[str] = mapped_column(String(255))