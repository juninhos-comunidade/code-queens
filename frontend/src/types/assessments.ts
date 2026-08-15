export type Stack = 
    'css'
    | 'html'
    | 'javascript'
    | 'net'
    | 'python'
    | 'sql'
    | 'typescript'

export interface StacksHistory {
    stack_id: number,
    stack_name: Stack,
    score_percentage: number,
    recommendation: string
}
export interface AssessmentsHistory {
    assessment_id: string,
    title: string,
    date: Date,
    stacks: [],
    score_global: number
}
