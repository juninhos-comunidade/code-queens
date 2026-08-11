from uuid import UUID

from src.main.models.change_password import ChangePassword
from src.main.models.security_question_update import SecurityQuestionUpdate
from src.main.models.user_create import UserCreate
from src.main.models.user_update import UserUpdate
from src.main.repositories.user_repository import UsersRepository
from src.main.services.password import hash_password, verify_password
from src.main.models.forgot_password import ForgotPassword


class UserService:

    def __init__(self, repository: UsersRepository):
        self.repository = repository

    def create_user(
        self,
        user: UserCreate
    ):
        if not user.accepted:
            raise ValueError("É necessário aceitar os termos de uso")

        existing_user = self.repository.get_user_by_email(user.email)

        if existing_user:
            raise ValueError("E-mail já cadastrado")

        password_hash = hash_password(user.password)

        return self.repository.create_user(
            user,
            password_hash
        )

    def get_user_by_email(
        self,
        email: str
    ):
        return self.repository.get_user_by_email(email)

    def get_user_by_id(
        self,
        user_id: UUID
    ):
        return self.repository.get_user_by_id(user_id)

    def authenticate_user(
        self,
        email: str,
        password: str
    ):
        user = self.get_user_by_email(email)

        if not user:
            return None

        if not verify_password(
            password,
            user.password_hash
        ):
            return None

        self.repository.update_last_login(user.id_users)

        return user

    def update_user(
        self,
        user_id: UUID,
        user_data: UserUpdate
    ):
        return self.repository.update_user(
            user_id,
            user_data
        )

    def change_password(
        self,
        user_id: UUID,
        password_data: ChangePassword
    ):
        user = self.repository.get_user_by_id(user_id)

        if not user:
            return None

        if not verify_password(
            password_data.current_password,
            user.password_hash
        ):
            return False

        new_password_hash = hash_password(
            password_data.new_password
        )

        return self.repository.change_password(
            user_id,
            new_password_hash
        )

    def update_security_question(
        self,
        user_id: UUID,
        data: SecurityQuestionUpdate
    ):
        return self.repository.update_security_question(
            user_id,
            data.id_security_questions,
            data.answer_security_question
        )

    def delete_user(
        self,
        user_id: UUID,
    ) -> bool:
        return self.repository.delete_user(user_id)

    def get_user_accepted_terms(
        self,
        user_id: UUID
    ) -> bool | None:
        return self.repository.get_user_accepted_terms(user_id)
   
    def forgot_password(
        self,
        data: ForgotPassword
    ):
        user = self.repository.get_user_by_email(data.email)

        if not user:
            return None

        if user.birth_date != data.birth_date:
            return None

        if user.id_security_questions != data.id_security_questions:
            return None

        if user.answer_security_question.lower().strip() != data.answer_security_question.lower().strip():
            return None

        return user
  
