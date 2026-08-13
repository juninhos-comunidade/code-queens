import { z } from 'zod';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


import { getLevels, getStacks } from '@/api/endpoints';
// import { postLogin } from '@/api/endpoints';
// import { useUserStore } from '@/store';

export const testSchema = z.object({
    technical_area: z.number({
        message: 'Informe qual área gostaria de testar'
    }).min(1, 'Você deve escolher uma área para prosseguir'),

    seniority: z.number({
        message: 'Informe o nível que deseja testar suas habilidades'
    }).min(1, 'Você deve escolher uma senioridade para prosseguir')
});
export type TestFormData = z.infer<typeof testSchema>;

interface Level {
    id_levels: number,
    levels_name: string,
}
interface TechnicalArea {
    id_stacks: number,
    stacks_name: string,
    career_paths: string[]
}

export const useTest = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const technicalArea = [
        {id: 1, description:'Front-end'},
        {id: 2, description:'Back-end'},
    ]
    
    const [levels, setLevels] = useState<Level[]>([])
    const [stacks, setStacks] = useState<any[]>([])
    

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
        console.log('Teste:', data)

    }

    useEffect(() => {
        handleLevels()
        handleStacks()
    }, [])

    return { isLoading, levels, stacks, technicalArea, handleTest }
}
