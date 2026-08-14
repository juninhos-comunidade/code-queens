from fastapi import Depends
from sqlalchemy.orm import Session

from src.main.database.session import SessionLocal

from src.main.repositories.user_repository import UsersRepository
from src.main.services.users_service import UserService

from src.main.repositories.level_repository import LevelRepository
from src.main.services.level_service import LevelService

from src.main.services.stack_service import StacksService
from src.main.repositories.stack_repository import StacksRepository

from src.main.repositories.assessment_repository import AssessmentsRepository
from src.main.services.assessments_service import AssessmentsService

from src.main.repositories.question_repository import QuestionRepository
from src.main.services.question_service import QuestionService

from src.main.repositories.result_test_repository import ResultTestRepository
from src.main.services.result_test_service import ResultTestService

from src.main.repositories.security_question_repository import SecurityQuestionRepository
from src.main.services.security_question_service import SecurityQuestionService

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


def get_question_service():
    db = SessionLocal()
    repository = QuestionRepository(db)
    service = QuestionService(repository)

    try:
        yield service
    finally:
        db.close()


def get_assessments_service():
    db = SessionLocal()

    assessment_repository = AssessmentsRepository(db)
    question_repository = QuestionRepository(db)

    service = AssessmentsService(
        assessment_repository,
        question_repository
    )

    try:
        yield service
    finally:
        db.close()
def get_result_test_service():
    db = SessionLocal()
    repository = ResultTestRepository(db)
    service = ResultTestService(repository)

    try:
        yield service
    finally:
        db.close()
def get_security_question_service():
    db = SessionLocal()
    repository = SecurityQuestionRepository(db)
    service = SecurityQuestionService(repository)

    try:
        yield service
    finally:
        db.close()