from fastapi import APIRouter
from fastapi.responses import JSONResponse

from backend.src.main.models.user_create import UserCreate

user_router = APIRouter(tags=["Usuários"])

@user_router.post("/users",status_code=201)
async def create_user(body : UserCreate):
    dict_body = dict(body)
    return JSONResponse(
        status_code=201,
        content={
            "message": "Usuário criado com sucesso",
            "att" : dict_body
            }
    ) 
