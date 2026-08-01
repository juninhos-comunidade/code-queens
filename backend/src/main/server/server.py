from fastapi import FastAPI
from backend.src.main.routes.users_routes import user_router
from backend.src.main.routes.auth_routes import auth_router

app = FastAPI(
    title='StackCheck API',
    version='1.0.0',
    description='Sistemas de avaliação ao candidato'
)

app.include_router(user_router)
app.include_router(auth_router)