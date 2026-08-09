from src.main.repositories.user_repository import UsersRepository
from src.main.models.user_create import UserCreate
from src.main.services.password import verify_password, hash_password


class UserService:

    def __init__(self, repository: UsersRepository):
        self.repository = repository

    def create_user(self, user: UserCreate):
        password_hash = hash_password(user.password)

        return self.repository.create_user(
            user,
            password_hash
        )

    def authenticate_user(self, email: str, password: str):
        user = self.repository.get_user_by_email(email)

        if not user:
            return None

        if not verify_password(password, user.password_hash):
            return None

        return user
