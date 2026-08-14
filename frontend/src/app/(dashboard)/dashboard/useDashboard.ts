import { useUserStore } from "@/store"
import { useRouter } from 'next/navigation';


export const useDashboard = () => {

    const {user} = useUserStore((state) => state)
    const router = useRouter()
    const navigationToTest = () => router.push('/test')
    const {full_name} = user

    return{user,full_name, navigationToTest}

}