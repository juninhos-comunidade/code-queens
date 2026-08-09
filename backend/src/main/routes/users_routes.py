from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from src.main.models.user_create import UserCreate
from src.main.services.users_service import UserService
from src.main.database.dependencies import get_user_service

user_router = APIRouter(tags=["Usuários"])


@user_router.post("/users", status_code=201)
async def create_user(
    body: UserCreate,
    service: UserService = Depends(get_user_service)
):

    user_id = service.create_user(body)

    return {
        "message": "Usuário criado com sucesso",
        "id": str(user_id)
    }