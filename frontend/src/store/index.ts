import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from '@/types/user';

interface UserStore {
    user: User;
    currentAssessment: {};
    setUser: (payload: User) => void;
    setCurrentAssessment: (payload: User) => void;
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
            currentAssessment: {},
            setUser: (payload: User) => set({ user: payload }),
            setCurrentAssessment: (payload: User) => set({ currentAssessment: payload }),
        }),
        {
            name: 'stackcheck-storage',
        }
        
    )
)
