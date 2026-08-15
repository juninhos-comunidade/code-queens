import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from '@/types/user';

interface AssessmentQuestions {
    id_question: number;
    id_alternative: number;
}

interface AssessmentInfo {
    id_assessments: string;
    id_users: string;
    id_levels: number;
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
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: {
                id_users: "",
                email: "",
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
            setUser: (payload: User) => set({ user: payload }),
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
