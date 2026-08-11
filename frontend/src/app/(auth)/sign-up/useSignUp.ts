import { z } from 'zod';

import { postCreateUser } from '@/api/endpoints';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const subscribeSchema = z.object({
    full_name: z.string().min(6, 'Informe como devemos te chamar'),
    email: z.email({ message: 'Você deve informar um e-mail valido' }),
    birth_date: z.iso.date({ message: 'Informe quando nasceu' }),
    uf: z.string().min(1, 'Informe o estado onde mora'),
    gender: z.string().min(1, 'Informe o genero com o qual se identifica'),
    password: z.string().min(6, 'Sua senha deve conter no minimo 6 caracteres'),
    confirmPassword: z.string({ message: 'Você deve confirmar sua senha' }),
    id_security_questions: z.number().or(z.string().min(1, 'Deu ruim')),
    answer_security_question: z.string().trim().min(3, 'Sua resposta deve ter no minimo 3 caracteres'),
    termsAcepted: z.boolean().refine(Boolean, {
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

    const handleCreateUser = async (data: SubscribeFormData) => {
        setIsLoading(true);
        await postCreateUser({ ...data, id_roles: 2 })
            .then(async () => {
                router.push('/dashboard')

            }).catch((error) => {
                console.error('Tivemos um erro ao criar seu usuario:', error);
            }).finally(() => {
                setIsLoading(false);
            })
    }



    return { useSignUp, handleCreateUser, isLoading }
}