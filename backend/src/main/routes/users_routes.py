from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID
from src.main.models.user_create import UserCreate
from src.main.services.users_service import UserService
from src.main.database.dependencies import get_user_service
from src.main.models.user_update import UserUpdate
from src.main.models.change_password import ChangePassword
from src.main.models.security_question_update import SecurityQuestionUpdate

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
@user_router.put("/users/{user_id}")
async def update_user(
    user_id: UUID,
    body: UserUpdate,
    service: UserService = Depends(get_user_service)
):
    user = service.update_user(user_id,body)

    if not user:
        raise HTTPException(
            status_code=404,
            detail="Usuário não encontrado"
        )
    return{
        "message":"Usuário atualizado com sucesso",
        "id_users": str(user.id_users),
        "full_name": user.full_name,
        "uf": user.uf,
        "gender": user.gender
    }
@user_router.patch("/users/{user_id}/password")
async def change_password(
    user_id: UUID,
    body: ChangePassword,
    service: UserService=Depends(get_user_service)
):
    result = service.change_password(
        user_id,
        body
    )
    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Usuário não encontrado"
        )
    if result is False:
        raise HTTPException(
            status_code=404,
            detail="Senha atual incorreta"
        )
    return {
        "message": "Senha alterada com sucesso"
    }
@user_router.patch("/users/{user_id}/security_question")
async def update_security_question(
    user_id: UUID,
    body: SecurityQuestionUpdate,
    service: UserService = Depends(get_user_service)
):
    user = service.update_security_question(
        user_id,
        body
    )
    if not user:
        raise HTTPException(
            status_code=404,
            detail="Usuário não encontrado"
        )
    return{
        "message": "Pergunta de segurança atualizada com sucesso."
    }