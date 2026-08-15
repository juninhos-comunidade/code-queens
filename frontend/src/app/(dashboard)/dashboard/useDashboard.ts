'use client'
import { useUserStore } from "@/store"
import { useRouter } from 'next/navigation';

import { getAssessmentsHistory } from "@/api/endpoints";
import { useState } from "react";

export const useDashboard = () => {

    const {user} = useUserStore()
    const {id_users} = user

    const router = useRouter()
    const navigationToTest = () => router.push('/test')
    const {full_name} = user
    const [history, setHistory] = useState<AssessmentsHistory[] | []>([])

    const getAssessmentsHistoryById = async () => {
        id_users &&
        await getAssessmentsHistory(id_users)
        .then((response) => {
            setHistory(response)
            console.log()
        }
        )
        .catch((error) => console.error(error))
        .finally()
    }

    return{user,id_users, full_name, history, navigationToTest,getAssessmentsHistoryById}

}