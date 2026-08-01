from uuid import UUID
from psycopg import Connection
from backend.src.main.models.user_create import UserCreate

class UsersRepository:

    def __init__(self, connection: Connection):
        self.connection = connection

    def create_user(self, user:UserCreate) -> UUID:
       with self.connection.cursor() as cursor:
           cursor.execute(
               """
               INSERT INTO core.users (
                full_name,
                birth_date,
                email,
                uf,
                gender,
                id_security_questions,
                answer_security_question,
                id_roles,
                timezone_origem
               )
               VALUES(
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s,
                %s
               )
               RETURNING id_users;
               """,
               (
                user.full_name,
                user.birth_date,
                user.email,
                user.uf,
                user.gender,
                user.id_security_questions,
                user.answer_security_question,
                user.id_roles,
                user.timezone_origem
               )
               
           )
           user_id = cursor.fetchone()[0]
           self.connection.commit()
           return user_id
    def get_user_by_email(self):
       pass
    def get_user_by_id(self):
       pass
    def list_users(self):
       pass

    def update_user(self):
       pass
    def delete_user(self):
       pass
    def update_last_login(self):
       pass
    def change_password(self):
       pass