'use client'

import { useParams } from "next/navigation";

import { Questionnaire } from "@/components/feature/Questionnaire/Questionnaire";


const Assessment = () => {
    const { id } = useParams();
    return (
        <Questionnaire/>
    );
};

export default Assessment;