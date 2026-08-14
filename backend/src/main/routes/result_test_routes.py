from fastapi import APIRouter, Depends
from typing import List
from uuid import UUID

from src.main.database.dependencies import get_result_test_service
from src.main.services.result_test_service import ResultTestService
from src.main.models.result_test import ResultTestResponse

result_router = APIRouter(prefix="/results", tags=["Results"])

@result_router.get("/{user_id}", response_model=List[ResultTestResponse])
def get_results(
    user_id: UUID, 
    service: ResultTestService = Depends(get_result_test_service) 
):

    return service.get_formatted_results(user_id)
