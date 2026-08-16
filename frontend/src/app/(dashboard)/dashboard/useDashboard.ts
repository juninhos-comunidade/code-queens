'use client'
import { useUserStore } from "@/store"
import { useRouter } from 'next/navigation';

import { getAssessmentsHistory, postLogout } from "@/api/endpoints";
import { AssessmentsHistory } from "@/types";
import { useEffect, useState } from "react";

export const useDashboard = () => {
  const { user } = useUserStore()
  const [isLoading, setIsLoading] = useState(<boolean>false)
  const { id_users, first_name } = user
  const [userToken, setToken] = useState<string>()

  const router = useRouter()
  const navigationToTest = () => router.push('/test')
  const [history, setHistory] = useState<AssessmentsHistory[] | []>([])

  const getAssessmentsHistoryById = async () => {
    setIsLoading(true)
    id_users &&
      await getAssessmentsHistory(id_users)
        .then((response) => {
          setHistory(response)
          setIsLoading(false)
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

  return  { isLoading, userToken, user, id_users, first_name, history, navigationToTest, getAssessmentsHistoryById }

}