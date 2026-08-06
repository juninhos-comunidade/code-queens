from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from backend.src.main.database.orm import Base


class Role(Base):

    __tablename__ = "roles"
    __table_args__ = {"schema": "core"}

    id_roles: Mapped[int] = mapped_column(
        primary_key=True
    )

    user_role: Mapped[str] = mapped_column(
        String(10),
        nullable=False
    )