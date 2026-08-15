from datetime import datetime

from sqlalchemy import DateTime, Integer, String, Text, func, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from src.main.database.orm import Base


class TermsCatalog(Base):
    __tablename__ = "terms_catalog"
    __table_args__ = {
        "schema": "core"
    }

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    terms_name: Mapped[str] = mapped_column(
        String,
        nullable=False
    )

    term_description: Mapped[str] = mapped_column(
        Text,
        nullable=False
    )

    terms_version: Mapped[str] = mapped_column(
        String,
        nullable=False
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.current_timestamp(),
        nullable=False
    )
    is_active: Mapped[bool] = mapped_column(
        Boolean,
        nullable=False,
        default=False
    )