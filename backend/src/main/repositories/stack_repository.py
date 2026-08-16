from sqlalchemy import select
from sqlalchemy.orm import Session

from src.main.entities.stacks import Stacks


class StacksRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_all(self):
        result = self.db.execute(
            select(Stacks).order_by(Stacks.id)
        )

        return result.scalars().all()