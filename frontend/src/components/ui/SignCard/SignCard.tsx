import { ReactNode } from 'react'
import styles from './signcard.module.scss'

type SignCard = {
    children: ReactNode
}
export const SignCard = ({children}:SignCard) => {

    return (
        <div className={styles.card}>
           {children}
        </div>
    )
}