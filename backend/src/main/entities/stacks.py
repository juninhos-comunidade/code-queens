from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from src.main.database.orm import Base

class Stacks(Base):
    __tablename__="stacks"
    __table_args__= {"schema":"core"}

    id: Mapped[int] = mapped_column(
        primary_key=True,
        autoincrement=True
    )
    stacks_name: Mapped[str] = mapped_column(
        String(50),
        nullable=False
    )