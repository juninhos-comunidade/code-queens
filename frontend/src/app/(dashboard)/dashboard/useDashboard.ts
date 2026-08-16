'use client'
import { useUserStore } from "@/store"
import { useRouter } from 'next/navigation';

import { getAssessmentsHistory, postLogout } from "@/api/endpoints";
import { AssessmentsHistory } from "@/types";
import { useEffect, useState } from "react";

export const useDashboard = () => {
  const { user } = useUserStore()
  const { id_users, first_name } = user
  const [userToken, setToken] = useState<string>()

  const router = useRouter()
  const navigationToTest = () => router.push('/test')
  const [history, setHistory] = useState<AssessmentsHistory[] | []>([])

  const getAssessmentsHistoryById = async () => {
    id_users &&
      await getAssessmentsHistory(id_users)
        .then((response) => {
          setHistory(response)
        }
        )
        .catch((error) => console.error(error))
        .finally()
  }

  const getLogout = async (token: string) => {
    await postLogout(token)
      .then(() => {
        router.push('/sign-in')
      })
      .catch((error) => console.log('Tivemos um erro ao deslogar', error))
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && setToken(token)
    if (!token) {
      router.replace("/sign-in");
    }
  }, [router]);

  return { getLogout, userToken, user, id_users, first_name, history, navigationToTest, getAssessmentsHistoryById }

}