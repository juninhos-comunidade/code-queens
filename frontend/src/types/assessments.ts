export type Stack =
    | 'css'
    | 'html'
    | 'javascript'
    | 'net'
    | 'python'
    | 'sql'
    | 'typescript';

export interface StacksHistory {
    stack_id: number;
    stack_name: Stack;
    score_percentage: number;
    classification: string;
    recommendation: string;
}

export interface AssessmentClassification {
    level: string;
    title: string;
    subtitle: string;
}

export interface AssessmentsHistory {
    assessment_id: string;
    title: string;
    date: Date;
    stacks: StacksHistory[];
    score_global: number;
    classification: AssessmentClassification;
}