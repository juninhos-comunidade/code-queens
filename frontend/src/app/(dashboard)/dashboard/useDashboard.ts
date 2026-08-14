import { useUserStore } from "@/store"
import { useRouter } from 'next/navigation';


export const useDashboard = () => {

    const {user, nickname} = useUserStore((state) => state)
    const router = useRouter()
    const navigationToTest = () => router.push('/test')
    const full_name = user.full_name 

    return{user,full_name, nickname , navigationToTest}

}