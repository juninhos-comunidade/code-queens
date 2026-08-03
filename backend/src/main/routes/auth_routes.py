from fastapi import APIRouter
from fastapi.responses import JSONResponse
from passlib.context import CryptContext

auth_router = APIRouter(prefix='/auth', tags=['auth'])

@auth_router.get("/login")


async def login():
    """
    Essa é a rota de login.
    """
    return {"mensagem": "Voce acessou a rota de login", "autenticado": False}
