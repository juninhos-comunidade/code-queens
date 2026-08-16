from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

from src.main.database.connection import DATABASE_URL


engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    pool_recycle=300,
    pool_size=5,
    max_overflow=10
)
SessionLocal = sessionmaker(
    bind=engine, 
    autoflush=False, 
    autocommit=False, 
    future=True
    )
Base = declarative_base() 