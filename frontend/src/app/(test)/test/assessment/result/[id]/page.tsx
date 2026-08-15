'use client'

import { useParams, useRouter } from "next/navigation";
import { getAssessmentsHistoryById } from '@/api/endpoints'
import { useEffect, useState } from "react";

import { StackCardResult } from "@/components/feature/StackCardResult/StackCardResult";

const AssessmentResult = () => {
    const {id} = useParams()
    const [resultByStack, setResultByStack] = useState<[]>([])
    const [userToken, setToken] = useState<string>()
    const router = useRouter()

    const getResult = async (id: string) => {
        await getAssessmentsHistoryById(id)
            .then((response) => {
                console.log('Teste',response.data.stacks)
                setResultByStack(response.data.stacks)
            })

    }

    useEffect(() => {
        getResult(id as string)

    }, [])
    useEffect(() => {
        const token = localStorage.getItem("token");
        token && setToken(token)
        if (!token) {
            router.replace("/sign-in");
        }
    }, [router]);

    return (
        userToken &&
        <StackCardResult resultsByStack={resultByStack} />

    );
};

export default AssessmentResult;