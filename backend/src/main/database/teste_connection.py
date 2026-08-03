from backend.src.main.database import engine
from sqlalchemy import text

try:
    with engine.connect() as connection:
        result = connection.execute(text("SELECT version();"))
        print(result.fetchone())

    print("Conexão realizada com sucesso!")

except Exception as e:
    print(f"Erro na conexão:{e}")