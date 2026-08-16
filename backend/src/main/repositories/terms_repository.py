from sqlalchemy import select
from sqlalchemy.orm import Session

from src.main.entities.terms_catalog import TermsCatalog


class TermsRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_active_terms_of_use(self):
        
        result = self.db.execute(
            select(TermsCatalog)
            .where(
                TermsCatalog.is_active.is_(True),
                TermsCatalog.terms_name == 'Termos de Uso'
            )
            .order_by(TermsCatalog.id.desc())
        )
        return result.scalars().first()

    def get_active_privacy_policy(self):
        
        result = self.db.execute(
            select(TermsCatalog)
            .where(
                TermsCatalog.is_active.is_(True),
                TermsCatalog.terms_name == 'Política de Privacidade'
            )
            .order_by(TermsCatalog.id.desc())
        )
        return result.scalars().first()