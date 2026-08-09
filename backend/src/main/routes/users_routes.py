from fastapi import APIRouter, Depends, HTTPException
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

@user_router.get("/users/email/{email}")
async def get_user_by_email(
    email: str,
    service: UserService = Depends(get_user_service)
):
    user = service.get_user_by_email(email)

    if not user:
        raise HTTPException(
            status_code=404,
            detail="Usuário não encontrado"
        )

    return {
        "id_users": str(user.id_users),
        "full_name": user.full_name,
        "email": user.email,
        "birth_date": user.birth_date,
        "uf":user.uf,
        "gender":user.gender,
        "id_security_questions":user.id_security_questions,
        "id_roles":user.id_roles,
        "timezone_origem":user.timezone_origem,
    }