from uuid import UUID
from sqlalchemy.orm import Session

from backend.src.main.models.user_create import UserCreate

class UsersRepository:
    def __init__(self, db: Session):
        self.db = db

    def create_user(self, user: UserCreate, password_hash: str) -> UUID:
        user_obj = UserCreate(
            full_name=user.full_name,
            birth_date=user.birth_date,
            email=user.email,
            uf=user.uf,
            gender=user.gender,
            password_hash=password_hash,
            id_security_questions=user.id_security_questions,
            answer_security_question=user.answer_security_question,
            id_roles=user.id_roles,
        )
        self.db.add(user_obj)
        self.db.commit()
        self.db.refresh(user_obj)
        return user_obj.id_users

    def get_user_by_email(self, email: str):
        return self.db.query(User).filter(User.email == email).first()