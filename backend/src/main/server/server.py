from fastapi import FastAPI

from src.main.routes.users_routes import user_router
from src.main.routes.auth_routes import login_router


app = FastAPI(
    title="StackCheck API",
    version="0.1.0",
    description="Sistemas de avaliação ao candidato"
)

app.include_router(user_router)
app.include_router(login_router)