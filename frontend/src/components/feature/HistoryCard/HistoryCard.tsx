import { CloudLightning } from "lucide-react"
import { StackTag } from "../StacksTag"
import styles from './historycard.module.scss'
import { formatDate } from "@/utils"
import Link from "next/link"

interface HistoryCardProps {
    index: number | string,
    titleTest: string,
    date: Date,
    stacks: [],
    score: number,
}
export const HistoryCard = ({ index, titleTest, date, stacks, score }: HistoryCardProps) => {

    return (
        <Link  href={`/test/assessment/result/${index}`}>
        <div className={styles.table_item}>
            <div className={styles.table_item_icon}>
                <CloudLightning />
            </div>
            <div className={styles.table_item_title}>
                <p>{titleTest || 'Fallback title'}</p>
                <p>{formatDate(date) ?? '10/08/2026'}</p>
            </div>

            <div className={styles.table_item_tags}>
                <StackTag options={stacks || new Array()} />
            </div>

            <div className={styles.table_item_progress}>
                <h6>{score ?? 90}%</h6>
            </div>
        </div>
        </Link>
    )
}