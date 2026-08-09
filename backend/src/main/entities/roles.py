from sqlalchemy import String, Integer
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Index

from main.database.orm import Base


class Role(Base):

    __tablename__ = "roles"
    __table_args__ = (
        Index("idx_roles_user_role","user_role"),
        {"schema": "core"},
    )

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    user_role: Mapped[str] = mapped_column(
        String(10),
        nullable=False
    )