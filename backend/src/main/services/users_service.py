from backend.src.main.services.password import verify_password

class UserService:

    def __init__(self, repository):
        self.repository = repository

    def authenticate_user(self, email: str, password: str):
        user = self.repository.get_user_by_email(email)
        if not user:
            return None
        if not verify_password(password, user.password_hash):
            return None
        return user