from src.main.repositories.level_repository import LevelRepository


class LevelService:

    def __init__(self, repository: LevelRepository):
        self.repository = repository

    def get_all(self):
        return self.repository.get_all()
