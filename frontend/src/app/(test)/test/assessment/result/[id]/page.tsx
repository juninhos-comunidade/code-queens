'use client'

import { useParams } from "next/navigation";
import Image from "next/image";
import styles from './result.module.scss'
import { getAssessmentsHistoryById } from '@/api/endpoints'
import { useEffect, useState } from "react";
import { Chip } from "@/components";
import CSS from '../../../../../../../public/stack_icons/css.png'
import { StackCardResult } from "@/components/feature/StackCardResult/StackCardResult";

const AssessmentResult = () => {
    const { id } = useParams();
    const [result, setResult] = useState<[]>([])
    const [resultByStack, setResultByStack] = useState<[]>([])

    const getResult = async (id: string) => {
        await getAssessmentsHistoryById(id)
            .then((res) => {
                setResult(res)
                setResultByStack(res.stacks)
            })

    }
    const getLevelClass = (score: number) => {
        console.log(score)
        if (score > 40) return 'basic';
        if (score > 64) return 'intermadiary';
        if (score > 85) return 'advanced';
        return 'initial';
    };
    useEffect(() => {
        getResult('759a03a4-6fe9-41f4-8fc7-e860cc5d03c2')

    }, [])
    useEffect(() => {
        console.log('na tela', result, resultByStack)

    }, [result])
    return (
        <>
            <h4>Seu resultado aqui {id}</h4>
            <StackCardResult resultsByStack={resultByStack}/>

            {/* {
                resultByStack?.map((result, index) => (
                    <div className={styles.card_stack} key={index}>
                        <div className={styles.header_container}>
                     
                            <Image src={CSS} className={styles.icon} width={40} alt="css" />
                            <p className={styles.title}>{result.stack_name}</p>
                            <span className={styles.chip}>
                                <Chip text="Intermediario" variable={getLevelClass(result.score_percentage) || 'initial'} />
                            </span>
                        </div>

                        <p className={styles.result_percentual}>{result.score_percentage}%</p>
                        <div className={styles.progress_bar_container} data-progress={result.score_percentage}>

                            <div className={styles.progress_bar}  data-progress={result.score_percentage}>
                            </div>
                        </div>
                        <p>{result.recommendation}</p>
                    </div>

                ))
            } */}
        </>
    );
};

export default AssessmentResult;