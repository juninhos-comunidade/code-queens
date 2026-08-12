import { CloudLightning } from "lucide-react"
import { StackTag } from "../StacksTag"
import styles from './historycard.module.scss'
interface HistoryCardProps {
    index: number,
    titleTest: string,
    date: string,
    stacks: string[],
    progress: number,
}
export const HistoryCard = ({ index, titleTest, date, stacks, progress }: HistoryCardProps) => {

    return (
        <div className={`${styles.table_item} ${index % 2 === 0 && styles.odd}`}>
            <div className={styles.table_item_icon}>
                <CloudLightning />
            </div>
            <div className={styles.table_item_title}>
                <p>{titleTest || 'Fallback title'}</p>
                <p>{date || '10/08/2026'}</p>
            </div>

            <div className={styles.table_item_tags}>
                <StackTag options={stacks || new Array('css', 'html', 'javascript', 'node')} />
            </div>

            <div className={styles.table_item_progress}>
                <h6>{progress || 89}%</h6>
            </div>
        </div>
    )
}