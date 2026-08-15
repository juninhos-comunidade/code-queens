from sqlalchemy import select
from sqlalchemy.orm import Session

from src.main.entities.terms_catalog import TermsCatalog


class TermsRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_active_term(self):
        result = self.db.execute(
            select(TermsCatalog)
            .where(TermsCatalog.is_active.is_(True))
            .order_by(TermsCatalog.id.desc())
        )

        return result.scalars().first()