from fastapi import APIRouter, Depends, HTTPException, status
from uuid import UUID
from src.main.database.dependencies import get_assessments_service
from src.main.models.assessment_create import AssessmentCreate
from src.main.services.assessments_service import AssessmentsService
from src.main.models.assessment_history_update import AssessmentHistoryUpdate
from src.main.models.assessment_submit import AssessmentSubmit
from src.main.services.assessments_service import AssessmentsService 

from src.main.services.security import get_current_user

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
    assessment_id: UUID,  
    data: AssessmentHistoryUpdate,
    service: AssessmentsService = Depends(get_assessments_service)
):
    try:
        
        service.update_history_title(assessment_id, user_id, data.title)
        return {"message": "Título atualizado com sucesso!"}
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    
@assessment_router.post("/{assessment_id}/submit")
def submit_assessment(
    assessment_id: UUID,
    data: AssessmentSubmit,
    service: AssessmentsService = Depends(get_assessments_service)
):
    try:
        result = service.submit_assessment(assessment_id, data)
        return {
            "message": "Prova enviada e corrigida com sucesso!",
            "data": result
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@assessment_router.get("/{user_id}/history")
def get_user_history(
    user_id: UUID,
    service: AssessmentsService = Depends(get_assessments_service)
):
    history_data = service.get_user_history_with_stacks(user_id)
    
    return history_data

@assessment_router.get("/{assessment_id}")
async def get_result_by_id(
    assessment_id: UUID,
    current_user_id: str = Depends(get_current_user),
    service: AssessmentsService = Depends(get_assessments_service)
):
    try:
        result = service.get_assessment_by_id(assessment_id, UUID(current_user_id))
        return {
            "message": "Resultado recuperado com sucesso!",
            "data": result
        }
    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e)
        )