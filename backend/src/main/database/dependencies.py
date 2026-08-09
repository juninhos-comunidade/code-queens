from main.database.session import SessionLocal
from main.repositories.user_repository import UsersRepository
from main.services.users_service import UserService

def get_user_service():
    db = SessionLocal()
    repository = UsersRepository(db)
    service = UserService(repository)

    try:
        yield service
    finally:
        db.close()