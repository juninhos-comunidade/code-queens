// 'use client'
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { handleCookie } from '@/authSettings';
import { useState } from 'react';
import { postLogin } from '@/api/endpoints';

export const loginSchema = z.object({
    email: z.string().min(3, 'Deve ter mais de 3 letras'),
    password: z.string().min(6, 'Sua senha deve ter mais de 6 digitos')
})

export type LoginFormData = z.infer<typeof loginSchema>;

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleLogin = async (data: LoginFormData) => {
        setIsLoading(true);
        await postLogin(data)
            .then(async () => {
                redirect('/dashboard')

            }).catch((error) => {
                console.error('Error during login:', error);
                // Handle error (e.g., show error message to user)
            }).finally(() => {
                setIsLoading(false);
            })
    }

    return { isLoading,handleLogin }
}
