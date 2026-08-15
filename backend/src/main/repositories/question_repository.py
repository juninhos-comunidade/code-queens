from sqlalchemy.orm import Session
from sqlalchemy import func
import random
from src.main.entities.question import Question
from src.main.entities.questions_stacks import QuestionStack
from src.main.entities.question_option import QuestionOption

class QuestionRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_random_questions_by_stacks(self, id_level: int, id_stacks: list[int]):
        num_stacks = len(id_stacks)
        limit_per_stack = 10 if num_stacks == 1 else 5
        
        selected_questions = []
        seen_question_ids = set()

        for id_stack in id_stacks:
            stack_questions = (
                self.db.query(Question)
                .join(QuestionStack, QuestionStack.id_questions == Question.id_question)
                .filter(
                    QuestionStack.id_stacks == id_stack,
                    Question.id_levels == id_level,
                    Question.questions_enabled == True
                )
                .order_by(func.random()) 
                .limit(limit_per_stack)
                .all()
            )
            
            for q in stack_questions:
                if q.id_question not in seen_question_ids:
                    seen_question_ids.add(q.id_question)
                    selected_questions.append(q)

        random.shuffle(selected_questions)

        result = []
        for question in selected_questions:
            options = (
                self.db.query(QuestionOption)
                .filter(QuestionOption.id_question == question.id_question)
                .all()
            )

            random.shuffle(options)

            result.append({
                "id_question": question.id_question,
                "question_description": question.question_description,
                "questions_enabled": question.questions_enabled, 
                "id_levels": question.id_levels,
                "options": [
                    {
                        "id_alternative": option.id_alternative,
                        "alternative_description": option.alternative_description
                    }
                    for option in options
                ]
            })

        return result