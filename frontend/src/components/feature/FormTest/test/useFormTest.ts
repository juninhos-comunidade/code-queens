import { z } from 'zod';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


import { getLevels, getStacks, postAssessments } from '@/api/endpoints';

import { useUserStore } from '@/store';

export const testSchema = z.object({
    technical_area: z.number({
        message: 'Informe qual área gostaria de testar'
    }).min(1, 'Você deve escolher uma área para prosseguir'),

    id_level: z.number({
        message: 'Informe o nível que deseja testar suas habilidades'
    }).min(1, 'Você deve escolher uma senioridade para prosseguir'),
    id_stacks: z
        .array(z.number())
        .min(2, {
            message: "Selecione pelo menos 2 tecnologias"
        })
        .max(5, {
            message: "Selecione no máximo 5 tecnologias"
        })
});
export type TestFormInput = z.input<typeof testSchema>;
export type TestFormData = z.output<typeof testSchema>;

interface Level {
    id_levels: number,
    levels_name: string,
}

export const useTest = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const technicalArea = [
        { id: 1, description: 'Front-end' },
        { id: 2, description: 'Back-end' },
    ]

    const [levels, setLevels] = useState<Level[]>([])
    const [stacks, setStacks] = useState<any[]>([])
    const [step, setStep] = useState<number>(0)
    const { user } = useUserStore((state) => state) //TODO: tipagem
    const { id_users } = user
    const { setCurrentAssessment } = useUserStore() //TODO: tipagem

    const info = [
        {
            step: 1,
            title: '1. Configure seu teste',
            subtitle: 'Comece informando para qual frente e nível você deseja testar seus conhecimentos.'
        },
        {
            step: 2,
            title: '2. Selecione as stacks',
            subtitle: 'Selecione as tecnologias que você deseja testar seu dominio e geraremos um teste prático personalizado sob medida para o seu perfil'
        },
    ]


    const router = useRouter()

    const handleLevels = async () => {
        await getLevels()
            .then((response) => setLevels(response))
            .catch((e) => console.error('Tivemos um problema ao retornar os niveis disponivels', e))
    }


    const handleStacks = async () => {
        await getStacks()
            .then((response) => setStacks(response))
            .catch((e) => console.error('Tivemos um problema ao retornar os niveis disponivels', e))
    }


    const handleTest = async (data: TestFormData) => {
        setIsLoading(true)
        await postAssessments({ ...data, ...{ id_user: id_users } })
            .then((response) => {
                const {assessment} = response
                setCurrentAssessment(response)
                router.push(`test/assessment/${assessment.id_assessments}`)
            }).finally(() =>
                setIsLoading(false)
            )
    }

    const changeStep = (action: string) => {
        if (action === 'go') {
            setStep(prev => prev + 1)
        }
        if (action === 'back') {
            setStep(prev => prev - 1)
        }
        if (action === 'cancel') {
            router.push('/dashboard')
        }
    }

    useEffect(() => {
        handleLevels()
        handleStacks()
    }, [])

    return { isLoading, levels, stacks, technicalArea, info, step, setStep, changeStep, handleTest }
}
