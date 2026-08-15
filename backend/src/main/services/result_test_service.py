from src.main.repositories.result_test_repository import ResultTestRepository
from src.main.models.result_test import ResultTestResponse
from uuid import UUID

class ResultTestService:
    def __init__(self, repository: ResultTestRepository):
        self.repository = repository

    def get_formatted_results(self, user_id: UUID) -> list[ResultTestResponse]:
        raw_results = self.repository.get_user_results(user_id)
        

        grouped_results = {}

        for row in raw_results:
            test_id = row.index

            if test_id not in grouped_results:
                date_str = row.date.strftime("%d/%m/%Y") if row.date else ""
                
                grouped_results[test_id] = {
                    "index": test_id,
                    "titleTest": row.titleTest,
                    "date": date_str,
                    "progress": row.progress or 0,
                    "stacks": [] 
                }
            
            if row.stack_name:
                grouped_results[test_id]["stacks"].append(row.stack_name)


        formatted_results = [
            ResultTestResponse(**data) for data in grouped_results.values()
        ]
            
        return formatted_results