from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from src.main.database.orm import Base

class Level(Base):
    __tablename__="levels"
    __table_args__= {"schema":"core"}

    id: Mapped[int] = mapped_column(
        primary_key=True,
        autoincrement=True
    )
    levels_name: Mapped[str] = mapped_column(
        String(50),
        nullable=False
    )