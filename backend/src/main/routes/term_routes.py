from fastapi import APIRouter, HTTPException, Depends


from src.main.services.terms_service import TermsService
from src.main.database.dependencies import get_terms_service

term_router = APIRouter(prefix="/terms", tags=["Terms"])


@term_router.get("/policy")
async def get_privacy_policy(service: TermsService = Depends(get_terms_service)):
    try:
        policy = service.get_privacy_policy() 
        if not policy:
            raise HTTPException(status_code=404, detail="Política de privacidade não encontrada.")
            
        return {"success": True, "data": policy}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@term_router.get("/usage")
async def get_terms_of_use(service: TermsService = Depends(get_terms_service)):
    try:
        term = service.get_terms_of_use() 
        if not term:
            raise HTTPException(status_code=404, detail="Termos de uso não encontrados.")
            
        return {"success": True, "data": term}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))