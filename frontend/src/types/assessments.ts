interface StacksHistory {
    stack_id: number,
    stack_name: string,
    score_percentage: number,
    recommendation: string
}
interface AssessmentsHistory {
    assessment_id: string,
    title: string,
    date: Date,
    stacks: [],
    score_global: number
}