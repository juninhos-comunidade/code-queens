import { z } from 'zod';

import { postCreateUser, postLogin } from '@/api/endpoints';
import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store';

export const subscribeSchema = z.object({
    full_name: z.string().min(6, 'Informe como devemos te chamar'),
    email: z.email({ message: 'Você deve informar um e-mail valido' }),
    birth_date: z.string({ message: 'Informe quando nasceu' }).transform((date) => (date).split('/').reverse().join().replaceAll(',', '-')),
    uf: z.string().min(1, 'Informe o estado onde mora'),
    gender: z.string().min(1, 'Informe o genero com o qual se identifica'),
    password: z.string().min(6, 'Sua senha deve conter no minimo 6 caracteres'),
    confirmPassword: z.string({ message: 'Você deve confirmar sua senha' }),
    id_security_questions: z.number().or(z.string().min(1, 'Deu ruim')),
    answer_security_question: z.string().trim().min(3, 'Sua resposta deve ter no minimo 3 caracteres'),
    accepted: z.boolean().refine(Boolean, {
        message: "Você deve aceitar os termos e políticas da plataforma",
    }),
}).superRefine((data, ctx) => {
    if (data.confirmPassword !== data.password) {
        ctx.addIssue({
            code: "custom",
            message: "As senhas devem ser iguais",
            path: ['confirmPassword']
        });
    }
})

export type SubscribeFormData = z.infer<typeof subscribeSchema>;


export const useSignUp = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const { setUser } = useUserStore()

    const handleCreateUser = async (data: SubscribeFormData) => {
        setIsLoading(true);
        await postCreateUser({ ...data, id_roles: 2 })
            .then(async (response) => {
                const { message, ...user } = response
            await postLogin({email: user.email, password: data.password})
            .then(async (response) => {
                const { access_token, token_type, message, ...user } = response
                localStorage.setItem('token', access_token);
                setUser(user)
                router.push('/dashboard')
            })

            }).catch((error) => {
                console.error('Tivemos um erro ao criar seu usuario:', error);
                setError(error.response?.data)
            }).finally(() => {
                setIsLoading(false);
            })
    }



    return { useSignUp, handleCreateUser, isLoading, error }
}