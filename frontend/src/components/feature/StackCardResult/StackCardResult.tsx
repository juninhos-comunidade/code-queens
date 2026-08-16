'use client'

import Image from "next/image";
import styles from './stackcardresult.module.scss'
import { Chip } from "@/components";
import { getIconByStack } from "@/utils/getIconByStack";

import { Stack, StacksHistory } from "@/types";

interface StackCardProps {
    resultsByStack: StacksHistory[]
}

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
export const StackCardResult = ({ resultsByStack }: StackCardProps) => {



    return (
        <>
            {
                resultsByStack?.map((result) => (
                    <>
                        <div className={styles.card_stack} key={result.stack_name}>
                            <div className={styles.header_container}>
                                <Image src={getIconByStack(result.stack_name as Stack)} className={styles.icon} width={40} height={40} alt="css" />
                                <p className={styles.title}>{result.stack_name}</p>
                                <span className={styles.chip}>
                                    <Chip text={getLevelClass(result.score_percentage).label} variable={getLevelClass(result.score_percentage).level} />
                                </span>
                            </div>

                            <p className={styles.result_percentual}>{result.score_percentage}%</p>
                            <div className={styles.progress_bar_container} data-progress={result.score_percentage}>

                                <div className={`${styles.progress_bar} ${styles[getLevelClass(result.score_percentage).level]}`} data-progress={result.score_percentage}>
                                </div>
                            </div>
                            <p>{result.recommendation}</p>
                        </div>
                    </>
                ))
            }
        </>
    );
};
