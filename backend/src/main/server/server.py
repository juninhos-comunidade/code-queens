from fastapi import FastAPI

from src.main.routes.users_routes import user_router
from src.main.routes.auth_routes import login_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="StackCheck API",
    version="0.1.0",
    description="Sistemas de avaliação ao candidato"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)
app.include_router(login_router)
