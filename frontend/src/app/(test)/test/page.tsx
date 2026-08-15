'use client'
import { FormTest } from "@/components/feature/FormTest/test";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const Test = () => {
    const router = useRouter()
    const [userToken, setToken] = useState<string>()
    useEffect(() => {
        const token = localStorage.getItem("token");
        token && setToken(token)
        if (!token) {
            router.replace("/sign-in");
        }
    }, [router]);

    return (
        userToken &&
        <FormTest />
    )
}
export default Test;