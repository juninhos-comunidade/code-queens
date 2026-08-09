
from uuid import UUID
from sqlalchemy import Index, Integer,String,ForeignKey,DateTime,func,Boolean
from sqlalchemy.orm import Mapped,mapped_column

from src.main.database.orm import Base

class UserAcceptedTerms(Base):
    __table_name__="user_accepteds_terms"
    __table_args__ = (
        Index("idx_user_accepteds_terms_id_users", "id_users"),
        Index("idx_user_accepteds_terms_id_terms", "id_terms"),
        Index("idx_user_accepteds_terms_accepted_at", "accepted_at"),
        {"schema": "core"},
    )
    id_acc_terms : Mapped[int] = mapped_column(
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
    id_terms : Mapped[int] = mapped_column(
        "id_terms",
        ForeignKey("core.terms_catalog.id"),
        nullable=False
    )
    accept : Mapped[bool] = mapped_column(
        Boolean,
        nullable=False
    )
    accept_at: Mapped[DateTime] = mapped_column(
        DateTime,
        server_default=func.current_timestamp(),
        nullable=False
    )