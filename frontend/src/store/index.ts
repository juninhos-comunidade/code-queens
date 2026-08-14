import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

import { User } from '@/types/user';

interface UseUser {
    user: User,
    nickname: string,
    setUser: (e: any) => void
}

export const useUserStore = create(
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
            setUser: (payload: User) => set({ user: payload })
        }),
        {
            name: 'stackcheck-storage',
            enabled: true
        }

    )
)
