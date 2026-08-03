
from backend.src.main.services.password import hash_password

class UserService:
    def __init__(self, repository):
        self.repository = repository

    def create_user(self, user):

        password_hash = hash_password(
            user.password
        )
        user.password_hash = password_hash
        return self.repository.create_user(user)