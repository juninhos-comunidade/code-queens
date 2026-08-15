from fastapi import APIRouter, Depends
from src.main.database.dependencies import get_security_question_service
from src.main.services.security_question_service import SecurityQuestionService

security_router = APIRouter(prefix="/security-questions", tags=["Security Questions"])

@security_router.get("/")
def get_security_questions(service: SecurityQuestionService = Depends(get_security_question_service)):
    return service.list_security_questions()