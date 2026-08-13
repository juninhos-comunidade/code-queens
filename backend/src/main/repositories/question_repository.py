from sqlalchemy.orm import Session

from src.main.entities.assessments_history import AssessmentsHistory
from src.main.entities.assessments_stacks import AssessmentsStacks
from src.main.entities.question import Question
from src.main.entities.questions_stacks import QuestionStack
from src.main.entities.question_option import QuestionOption


class QuestionRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_questions_by_assessment(
        self,
        id_assessment: int
    ):
        assessment = (
            self.db.query(AssessmentsHistory)
            .filter(
                AssessmentsHistory.id_assessments == id_assessment
            )
            .first()
        )

        if not assessment:
            return None

        questions = (
            self.db.query(Question)
            .join(
                QuestionStack,
                QuestionStack.id_questions == Question.id_question
            )
            .join(
                AssessmentsStacks,
                AssessmentsStacks.id_stacks == QuestionStack.id_stacks
            )
            .filter(
                AssessmentsStacks.id_assessments == id_assessment,
                Question.id_levels == assessment.id_levels,
                Question.questions_enabled == True
            )
            .distinct()
            .all()
        )

        result = []

        for question in questions:

            options = (
                self.db.query(QuestionOption)
                .filter(
                    QuestionOption.id_question == question.id_question
                )
                .all()
            )

            result.append({
                "id_question": question.id_question,
                "question_description": question.question_description,
                "options": [
                    {
                        "id_alternative": option.id_alternative,
                        "alternative_description": option.alternative_description
                    }
                    for option in options
                ]
            })

        return result