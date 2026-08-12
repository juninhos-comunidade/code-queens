import { useUserStore } from "@/store"

export const useDashboard = () => {

    const {user, nickname} = useUserStore((state) => state)
    const full_name = user.full_name 

    return{user,full_name, nickname}

}