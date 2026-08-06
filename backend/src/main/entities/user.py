import uuid
from datetime import date, datetime
from uuid import UUID

from sqlalchemy import Date, DateTime, ForeignKey, String, func
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.orm import Mapped, mapped_column

from backend.src.main.database.orm import Base


class User(Base):
    __tablename__ = "users"
    __table_args__ = {"schema": "core"}

    id_users: Mapped[UUID] = mapped_column(
        PG_UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4
    )

    full_name: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )

    birth_date: Mapped[date] = mapped_column(
        Date,
        nullable=False
    )

    email: Mapped[str] = mapped_column(
        String(155),
        unique=True,
        nullable=False
    )

    uf: Mapped[str] = mapped_column(
        String(2),
        nullable=False
    )

    gender: Mapped[str] = mapped_column(
        String(35),
        nullable=False
    )

    password_hash: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )

    id_security_questions: Mapped[int] = mapped_column(
        ForeignKey("core.security_questions.id_security_questions"),
        nullable=False
    )

    answer_security_question: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )

    id_roles: Mapped[int] = mapped_column(
        ForeignKey("core.roles.id_roles"),
        nullable=False
    )
    timezone_origem: Mapped[str] = mapped_column(
        String(50),
        nullable=True
    )
    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        server_default=func.now(),
        nullable=False
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False
    )