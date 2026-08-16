import { z } from 'zod';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { postLogin } from '@/api/endpoints';
import { useUserStore } from '@/store';

export const loginSchema = z.object({
    email: z.string().min(3, 'Deve ser informado um e-mail válido'),
    password: z.string().min(6, 'Sua senha deve conter no minimo 6 caracteres')
})

export type LoginFormData = z.infer<typeof loginSchema>;

export const useSignIn = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const router = useRouter()
    const { setUser } = useUserStore()

    const handleLogin = async (data: LoginFormData) => {
        setIsLoading(true);
        await postLogin(data)
            .then(async (response) => {
                const { access_token, token_type, message, ...user } = response
                localStorage.setItem('token', access_token);
                setUser(user)
                router.push('/dashboard')

            }).catch((error) => {
                console.error('Tivemos um erro ao realizar seu login:', (error.response?.data?.detail));
                setError(error.response?.data?.detail)
            }).finally(() => {
                setIsLoading(false);
            })
    }

    return { error, isLoading, handleLogin }
}
