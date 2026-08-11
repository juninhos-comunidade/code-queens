import { User } from '@/types/user';
import { create } from 'zustand';

interface UseUser {
    user: User,
    nickname: string,
    setUser: (e :any) => void
}

export const useUserStore = create<UseUser>((set) => ({
    user: {
        id_users: "759a03a4-6fe9-41f4-8fc7-e860cc5d03c2",
        email: "maria@email.com",
        full_name: "",
        birth_date: "2000-01-01",
        uf: "MG",
        gender: "Masculino",
        id_security_questions: 1,
        id_roles: 2,
        timezone_origem: "America/Sao_Paulo",
        last_login: "2026-08-11T00:50:33.435748+00:00",
        accepted: null
    },
    nickname: 'kelly santos',
    idade:50,
    setUser: (payload: User) => set({user: payload})
}))