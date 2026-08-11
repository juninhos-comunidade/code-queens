import { z } from 'zod';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { postLogin } from '@/api/endpoints';

export const loginSchema = z.object({
    email: z.string().min(3, 'Deve ser informado um e-mail válido'),
    password: z.string().min(6, 'Sua senha deve conter no minimo 6 caracteres')
})

export type LoginFormData = z.infer<typeof loginSchema>;

export const useSignIn = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter()

    const handleLogin = async (data: LoginFormData) => {
        setIsLoading(true);
        await postLogin(data)
            .then(async () => {
                router.push('/dashboard')

            }).catch((error) => {
                console.error('Tivemos um erro ao realizar seu login:', error);
                // Handle error (e.g., show error message to user)
            }).finally(() => {
                setIsLoading(false);
            })
    }

    return { isLoading,handleLogin }
}
