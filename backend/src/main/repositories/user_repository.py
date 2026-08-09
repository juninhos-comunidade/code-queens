from uuid import UUID

from sqlalchemy.orm import Session
from sqlalchemy import select

from src.main.entities.user import User
from src.main.models.user_create import UserCreate


class UsersRepository:

    def __init__(self, db: Session):
        self.db = db

    def create_user(self, user: UserCreate, password_hash: str) -> UUID:

        user_obj = User(
            full_name=user.full_name,
            birth_date=user.birth_date,
            email=user.email,
            uf=user.uf,
            gender=user.gender,
            password_hash=password_hash,
            id_security_questions=user.id_security_questions,
            answer_security_question=user.answer_security_question,
            id_roles=user.id_roles,
            timezone_origem=user.timezone_origem,
        )

        self.db.add(user_obj)
        self.db.commit()
        self.db.refresh(user_obj)

        return user_obj.id_users

    def get_user_by_email(self, email: str):
        stmt = select(User).where(User.email == email)
        return self.db.execute(stmt).scalar_one_or_none()
    def get_user_by_email(self, email: str) -> User | None: 
        stmt = select(User).where(User.email == email) 
        return self.db.scalar(stmt)

    def get_user_by_id(self, user_id: UUID) -> User | None:
        return (
            self.db.query(User)
            .filter(User.id_users == user_id)
            .first()
        )

    def list_users(self) -> list[User]:
        return self.db.query(User).all()

    def update_user(self):
        pass

    def delete_user(self):
        pass

    def update_last_login(self):
        pass

    def change_password(self):
        pass