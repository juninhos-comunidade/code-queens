from fastapi import APIRouter, Depends, HTTPException, status

from src.main.database.dependencies import get_user_service
from src.main.models.login_request import LoginRequest
from src.main.services.users_service import UserService
from src.main.models.forgot_password import ForgotPassword

auth_router =APIRouter(
    prefix="/auth",
    tags=["autenticação"]
)

@auth_router.post("/login")
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
    accepted = service.get_user_accepted_terms(
        authenticated_user.id_users
    )

    return {
        "message": "Login realizado com sucesso",
        "id_users": str(authenticated_user.id_users),
        "email": authenticated_user.email,
        "full_name": authenticated_user.full_name,
        "birth_date": authenticated_user.birth_date,
        "uf":authenticated_user.uf,
        "gender":authenticated_user.gender,
        "id_security_questions": authenticated_user.id_security_questions,
        "id_roles":authenticated_user.id_roles,
        "timezone_origem":authenticated_user.timezone_origem,
        "last_login":authenticated_user.last_login,
        "accepted": accepted
    }

@auth_router.post("/forgot-password")
async def forgot_password(
    body: ForgotPassword,
    service: UserService = Depends(get_user_service)
):
    user = service.forgot_password(body)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Dados de recuperação inválidos"
        )

    return {
        "message": "Dados de recuperação válidos",
        "id_users": str(user.id_users)
    }
