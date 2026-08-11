
from fastapi import APIRouter, Depends

from src.main.database.dependencies import get_stacks_service
from src.main.services.stack_service import StacksService


stacks_router = APIRouter(
    prefix="/stacks",
    tags=["Stacks"]
)


@stacks_router.get("/")
async def get_stacks(
    service: StacksService = Depends(get_stacks_service)
):
    stacks = service.get_all()

    return [
        {
            "id_stacks": stack.id,
            "stacks_name": stack.stacks_name
        }
        for stack in stacks
    ]
