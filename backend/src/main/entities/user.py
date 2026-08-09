import uuid
from datetime import date, datetime
from uuid import UUID

from sqlalchemy import Date, DateTime, ForeignKey, Index, String, func
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from sqlalchemy.orm import Mapped, mapped_column

from src.main.database.orm import Base


class User(Base):
    __tablename__ = "users"
    __table_args__ = (
        Index("idx_users_id_security_questions", "id_security_questions"),
        Index("idx_users_id_roles", "id_roles"),
        {"schema": "core"},
    )
    

    id_users: Mapped[UUID] = mapped_column(
        "id",
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

    id_security_questions : Mapped[int] = mapped_column(
        "id_security_questions",
        ForeignKey("core.security_questions.id"),
        nullable=False
    )

    answer_security_question: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )

    id_roles : Mapped[int] = mapped_column(
        "id_roles",
        ForeignKey("core.roles.id"),
        nullable=False
    )
    timezone_origem: Mapped[str] = mapped_column(
        String(50),
        nullable=True
    )
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False
    )
    
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False
    )