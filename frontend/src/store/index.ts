import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from '@/types/user';

interface AssessmentOption {
    id_alternative: number;
    alternative_description: string;
}

interface AssessmentQuestions {
    id_question: number;
    question_description: string;
    questions_enabled: boolean;
    id_levels: number;
    options: AssessmentOption[];
}

interface AssessmentInfo {
    id_assessments: string;
    id_users: string;
    id_levels: number;
    id_stacks: []
    title: string;
    date_assessments: string;
    start_time: string;
    end_time: string | null;
    score: number | null;
}

interface AssessmentResponse {
    assessment: AssessmentInfo;
    questions: AssessmentQuestions[];
}

interface UserStore {
    user: User;
    currentAssessment: AssessmentResponse | null;
    setUser: (payload: User) => void;
    setCurrentAssessment: (payload: AssessmentResponse | null) => void;
    setFirstName: () => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: {
                id_users: "",
                email: "",
                first_name: "",
                full_name: "",
                birth_date: "",
                uf: "",
                gender: "",
                id_security_questions: 0,
                id_roles: 0,
                timezone_origem: "",
                last_login: "",
                accepted: null
            },
            currentAssessment: null,
            setUser: (payload: User) => set({ user: { ...payload, first_name: payload?.full_name?.split(' ')[0]}}),
            setFirstName: () => set((state: UserStore) => ({
                user: {
                    ...state.user,
                    first_name: state.user.full_name[0] 
                }
            })),
            setCurrentAssessment: (payload: AssessmentResponse | null) =>
                set({
                    currentAssessment: payload
                }),
        }),
        {
            name: 'stackcheck-storage',
        }

    )
)
