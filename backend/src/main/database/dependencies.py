from fastapi import Depends
from sqlalchemy.orm import Session

from src.main.database.session import SessionLocal

from src.main.repositories.user_repository import UsersRepository
from src.main.services.users_service import UserService

from src.main.repositories.level_repository import LevelRepository
from src.main.services.level_service import LevelService

from src.main.services.stack_service import StacksService
from src.main.repositories.stack_repository import StacksRepository


def get_user_service():
    db = SessionLocal()
    repository = UsersRepository(db)
    service = UserService(repository)

    try:
        yield service
    finally:
        db.close()


def get_level_service():
    db = SessionLocal()
    repository = LevelRepository(db)
    service = LevelService(repository)

    try:
        yield service
    finally:
        db.close()

def get_stacks_service():
    db = SessionLocal()
    repository = StacksRepository(db)
    service = StacksService(repository)

    try:
        yield service
    finally:
        db.close()

