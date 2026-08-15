import { CloudLightning } from "lucide-react"
import { StackTag } from "../StacksTag"
import styles from './historycard.module.scss'

import { formatDate } from "@/utils"
interface HistoryCardProps {
    index: number | string,
    titleTest: string,
    date: Date,
    stacks: string,
    score: number,
}
export const HistoryCard = ({ index, titleTest, date, stacks, score }: HistoryCardProps) => {

    return (
        <div className={`${styles.table_item} ${Number(index) % 2 === 0 && styles.odd}`}>
            <div className={styles.table_item_icon}>
                <CloudLightning />
            </div>
            <div className={styles.table_item_title}>
                <p>{titleTest || 'Fallback title'}</p>
                <p>{formatDate(date) ?? '10/08/2026'}</p>
            </div>

            <div className={styles.table_item_tags}>
                <StackTag options={stacks || new Array('css', 'html', 'javascript', 'node')} />
            </div>

            <div className={styles.table_item_progress}>
                <h6>{score ?? 90}%</h6>
            </div>
        </div>
    )
}