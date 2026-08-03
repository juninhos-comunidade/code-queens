from fastapi import APIRouter
from fastapi.responses import JSONResponse

from backend.src.main.models.user_create import user_create

user_router = APIRouter(tags=["Usuários"])

@user_router.get("/users")
async def create_user(body : user_create):
    dict_body = dict(body)
    return JSONResponse(
        status_code=201,
        content={
            "message": "Usuário criado com sucesso",
            "att" : dict_body
            }
    ) 
