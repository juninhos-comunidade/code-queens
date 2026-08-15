from sqlalchemy import select
from sqlalchemy.orm import Session

from src.main.entities.level import Level


class LevelRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_all(self):
        result = self.db.execute(
            select(Level).order_by(Level.id)
        )

        return result.scalars().all()