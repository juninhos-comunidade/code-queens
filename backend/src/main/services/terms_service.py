from src.main.repositories.terms_repository import TermsRepository

class TermsService:
    def __init__(self, repository: TermsRepository):
        self.repository = repository

    def get_terms_of_use(self):
        return self.repository.get_active_terms_of_use()

    def get_privacy_policy(self):
        return self.repository.get_active_privacy_policy()