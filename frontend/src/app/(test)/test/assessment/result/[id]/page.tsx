'use client'

import { useParams, useRouter } from "next/navigation";
import { getAssessmentsHistoryById } from '@/api/endpoints'
import { useEffect, useState } from "react";
import { StacksHistory, AssessmentsHistory } from "@/types";

import { StackCardResult } from "@/components/feature/StackCardResult/StackCardResult";

import styles from './result.module.scss'
import { Button, Limit, Tag } from "@/components";
import { ArrowLeft, RefreshCcw } from "lucide-react";
const AssessmentResult = () => {
    const { id } = useParams()
    const [resultByStack, setResultByStack] = useState<StacksHistory[]>([]);
    const [resultInfo, setResultInfo] = useState<AssessmentsHistory | null>(null);

    const [userToken, setToken] = useState<string>()
    const router = useRouter()

    const getResult = async (id: string) => {
        try {
            const response = await getAssessmentsHistoryById(id);

            const data: AssessmentsHistory = response.data;

            setResultInfo(data);
            setResultByStack(data.stacks);
        } catch (error) {
            console.error(error);
        }
    };
    const labelLevel = {
        INITIAL: 'iniciante',
        BASIC: 'básico',
        INTERMEDIARY: 'intermediário',
        ADVANCED: 'avançado',
    } as const;

    const getLevelClass = (score: number) => {
        if (score > 85) return { level: "advanced", label: labelLevel.ADVANCED };
        if (score > 64) return { level: "intermediary", label: labelLevel.INTERMEDIARY };
        if (score > 40) return { level: "basic", label: labelLevel.BASIC };
        return { level: "initial", label: labelLevel.INITIAL };
    };

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
        <div className={styles.page}>

            <Limit>
                <div className={styles.header_result}>
                    <div className={styles.header_result_title}>
                        <Button variant="outline" onClick={() => router.push('/dashboard')}><ArrowLeft /></Button>
                        <h1>Resultado do Teste</h1>
                    </div>
                    <div className={styles.header_result_info}>
                        <Button variant="outline" onClick={() => router.push('/test')} text="Gerar novo teste" icon={<RefreshCcw />} />
                    </div>
                </div>



                <div className={styles.result_resume}>
                    <div className={styles.score}>
                        <h6>Pontuação Geral</h6>

                        <div className={styles.score_status}>
                            <svg viewBox="0 0 120 120">
                                <circle
                                    className={styles.circle_bg}
                                    cx="60"
                                    cy="60"
                                    r="48"
                                />

                                <circle
                                    className={`${styles.circle_progress} ${getLevelClass(resultInfo?.score_global || 0)?.level}`}
                                    cx="60"
                                    cy="60"
                                    r="48"
                                    strokeDasharray="301.6"
                                    strokeDashoffset={301.6 - (301.6 * Number(resultInfo?.score_global ?? 0)) / 100}
                                />
                            </svg>

                            <div className={styles?.score_content}>
                                <strong>{resultInfo?.score_global}%</strong>

                            </div>
                        </div>
                    </div>

                    <div className={styles.score_description}>
                        <p className={styles.score_description_title}>Continue evoluindo</p>
                        {resultInfo &&

                            <Tag
                                text={resultInfo?.classification?.level}
                                className={getLevelClass(resultInfo?.score_global).level}
                            />
                        }
                        <p className={styles.score_description_title}>
                            Continue estudando para alcançar o nível avançado!
                        </p>
                        <p>Você demonstra uma base sólida e compreensão prática.
                            Foque nos tópicos abaixo para evoluir ainda mais.</p>
                    </div>
                    <div>
                        <img src={''} alt="" />
                    </div>

                </div>
                <div className={styles.stack_card_container}>
                    <StackCardResult resultsByStack={resultByStack} />
                </div>
                <div className={styles.stack}>
                    {/* O que estudar a seguir */}
                </div>
            </Limit>
        </div>

    );
};

export default AssessmentResult;