import { ReactNode } from "react"

import styles from './limit.module.scss'

type Limit = {
    children: ReactNode,
    size?: string, 
}
export const Limit = ({children, size}: Limit) => {
    return(
        <section className={`${styles.limit_container}`}>
            {children}
        </section>
    )
}