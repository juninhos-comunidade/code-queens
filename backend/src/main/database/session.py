from backend.src.main.database.orm import SessionLocal

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()