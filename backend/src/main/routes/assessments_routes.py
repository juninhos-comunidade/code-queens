from fastapi import APIRouter, Depends

from src.main.database.dependencies import get_assessments_service
from src.main.models.assessment_create import AssessmentCreate
from src.main.services.assessments_service import AssessmentsService


assessment_router = APIRouter(
    prefix="/assessments",
    tags=["Assessments"]
)


@assessment_router.post("/")
async def start_assessment(
    assessment_data: AssessmentCreate,
    service: AssessmentsService = Depends(get_assessments_service)
):
    return service.create_assessment(
        assessment_data=assessment_data
    )