from src.main.repositories.stack_repository import StacksRepository


class StacksService:

    def __init__(self, repository: StacksRepository):
        self.repository = repository

    def get_all(self):
        return self.repository.get_all()
