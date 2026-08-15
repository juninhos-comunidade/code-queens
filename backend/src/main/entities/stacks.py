from sqlalchemy import String,ARRAY
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
    career_paths: Mapped[list[str]] = mapped_column(
        ARRAY(String),
        nullable=False
    )