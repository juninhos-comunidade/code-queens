from sqlalchemy.orm import Session

from src.main.entities.assessments_history import AssessmentsHistory
from src.main.entities.assessments_stacks import AssessmentsStacks
from src.main.models.assessment_create import AssessmentCreate


class AssessmentsRepository:

    def __init__(self, db: Session):
        self.db = db

    def create_assessment(
        self,
        assessment_data: AssessmentCreate
    ):
        assessment = AssessmentsHistory(
            id_users=assessment_data.id_user,
            id_levels=assessment_data.id_level
        )

        self.db.add(assessment)
        self.db.flush()

        for id_stack in assessment_data.id_stacks:

            assessment_stack = AssessmentsStacks(
                id_assessments=assessment.id_assessments,
                id_stacks=id_stack
            )

            self.db.add(assessment_stack)

        self.db.commit()
        self.db.refresh(assessment)

        return assessment