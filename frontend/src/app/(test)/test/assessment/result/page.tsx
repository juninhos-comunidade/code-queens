'use client'

import { redirect, useParams } from "next/navigation";
import styles from './result.module.scss'

const AssessmentResult = () => {
    const { id } = useParams();
    return (
       <h3>Teste não encontrado, volte ao dashboard e acesse novamente</h3>
    );
};

export default AssessmentResult;