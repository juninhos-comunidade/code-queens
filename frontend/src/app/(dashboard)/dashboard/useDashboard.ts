'use client'
import { useUserStore } from "@/store"
import { useRouter } from 'next/navigation';

import { getAssessmentsHistory } from "@/api/endpoints";
import { AssessmentsHistory } from "@/types";
import { useEffect, useState } from "react";

export const useDashboard = () => {
  const {user} = useUserStore()
  const {id_users} = user
  const [userToken, setToken] = useState<string>()
  
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

useEffect(() => {
    const token = localStorage.getItem("token");
    token && setToken(token)
    if (!token) {
      router.replace("/sign-in");
    }
  }, [router]);

    return{userToken, user,id_users, full_name, history, navigationToTest,getAssessmentsHistoryById}

}