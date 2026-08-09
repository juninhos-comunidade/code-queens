
from backend.src.main.services.password import hash_password

class UserService:
    def __init__(self, repository):
        self.repository = repository

    def create_user(self, user):

        password_hash = hash_password(
            user.password
        )
        return self.repository.create_user(
            user, 
            password_hash
        )