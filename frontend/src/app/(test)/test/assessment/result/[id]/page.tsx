'use client'

import { useParams, useRouter } from "next/navigation";
import { getAssessmentsHistoryById } from '@/api/endpoints'
import { useEffect, useState } from "react";

import { StackCardResult } from "@/components/feature/StackCardResult/StackCardResult";

const AssessmentResult = () => {

    const [resultByStack, setResultByStack] = useState<[]>([])
    const [userToken, setToken] = useState<string>()
    const router = useRouter()

    const getResult = async (id: string) => {
        await getAssessmentsHistoryById(id)
            .then((response) => {
                setResultByStack(response.data.stacks)
            })

    }

    useEffect(() => {
        getResult('759a03a4-6fe9-41f4-8fc7-e860cc5d03c2')

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