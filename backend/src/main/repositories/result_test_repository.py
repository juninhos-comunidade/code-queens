from sqlalchemy.orm import Session

from src.main.entities.assessments_history import AssessmentsHistory 
from src.main.entities.assessments_stacks import AssessmentsStacks
from src.main.entities.stacks import Stacks

from uuid import UUID
class ResultTestRepository:
    def __init__(self, db: Session):
        self.db = db
    def get_user_results(self, user_id: UUID):
            results = (
                self.db.query(
                    AssessmentsHistory.id_assessments.label("index"),
                    AssessmentsHistory.title.label("titleTest"),
                    AssessmentsHistory.date_assessments.label("date"),
                    AssessmentsHistory.score.label("progress"),
                    Stacks.stack_name.label("stack_name")
                )

                .outerjoin(
                    AssessmentsStacks, 
                    AssessmentsHistory.id_assessments == AssessmentsStacks.id_assessment
                ) 

                .outerjoin(
                    Stacks, 
                    AssessmentsStacks.id_stack == Stacks.id_stack
                )

                .filter(AssessmentsHistory.id_users == user_id)
                .all()
            )
            return results