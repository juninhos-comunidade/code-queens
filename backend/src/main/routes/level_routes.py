from fastapi import APIRouter, Depends

from src.main.database.dependencies import get_level_service
from src.main.services.level_service import LevelService


level_router = APIRouter(
    prefix="/levels",
    tags=["Levels"]
)


@level_router.get("/")
async def get_levels(
    service: LevelService = Depends(get_level_service)
):
    levels = service.get_all()

    return [
        {
            "id_levels": level.id,
            "levels_name": level.levels_name
        }
        for level in levels
    ]
