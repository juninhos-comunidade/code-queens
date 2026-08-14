import { z } from 'zod';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// import { postLogin } from '@/api/endpoints';
// import { useUserStore } from '@/store';

export const testSchema = z.object({
    technical_area: z.number({
        message: 'Informe qual área gostaria de testar'
    }).min(1, 'Você deve escolher uma área para prosseguir'),

    id_levels: z.number({
        message: 'Informe o nível que deseja testar suas habilidades'
    }).min(1, 'Você deve escolher uma senioridade para prosseguir')
});
export type TestFormData = z.infer<typeof testSchema>;

export const useTest = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter()
    // const {setUser} = useUserStore()

    const handleTest = async (data: TestFormData) => {
        console.log('Teste:', data)

    }
    return { isLoading, handleTest }
}
