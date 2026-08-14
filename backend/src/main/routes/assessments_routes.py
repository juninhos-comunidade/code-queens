from fastapi import APIRouter, Depends, HTTPException
from uuid import UUID
from src.main.database.dependencies import get_assessments_service
from src.main.models.assessment_create import AssessmentCreate
from src.main.services.assessments_service import AssessmentsService
from src.main.models.assessment_history_update import AssessmentHistoryUpdate


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

@assessment_router.patch("/{user_id}/history/{assessment_id}/title")
def update_title(
    user_id: UUID, 
    assessment_id: UUID,  # <--- Mudado aqui
    data: AssessmentHistoryUpdate,
    service: AssessmentsService = Depends(get_assessments_service)
):
    try:
        # Lembre-se de passar o novo nome também para o service
        service.update_history_title(assessment_id, user_id, data.title)
        return {"message": "Título atualizado com sucesso!"}
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))