from fastapi import APIRouter, Depends, HTTPException, status

from src.main.database.dependencies import get_user_service
from src.main.models.login_request import LoginRequest
from src.main.services.users_service import UserService

login_router =APIRouter(
    prefix="/auth",
    tags=["autenticação"]
)

@login_router.post("/login")
async def login(
    user: LoginRequest,
    service: UserService = Depends(get_user_service)
):
    authenticated_user = service.authenticate_user(
        email=user.email,
        password=user.password
    )

    if not authenticated_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="E-mail ou senha inválidos"
        )

    return {
        "message": "Login realizado com sucesso",
        "id_users": str(authenticated_user.id_users),
        "email": authenticated_user.email
    }