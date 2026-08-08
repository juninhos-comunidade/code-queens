import { CircleCheck, CircleAlert, CircleX, AlertCircle } from 'lucide-react'
import styles from './toast.module.scss'
type Variables = 'primary' | 'info' | 'warning' | 'error' | 'success'
interface ToastProps {
    title: string,
    subtitle: string,
    isOnlyDescribe?: boolean,
    variable: Variables

}
export const Toast = ({ variable, title, subtitle, isOnlyDescribe = false }: ToastProps) => {

    const getIcon = (state: string) => {
        if (state.includes('success')) return <CircleCheck size={24} />
        if (state.includes('error')) return <CircleX size={24} />;
        return <CircleAlert size={24} />
    }

    return (
        <div className={`${styles.toast} ${styles[variable]} ${isOnlyDescribe && styles.only_describe}`}>
            {isOnlyDescribe ?
                <p className={`${styles.subtitle}`}> {subtitle}
                </p> :
                <>
                    <p className={styles.title}> {!isOnlyDescribe && getIcon(variable)}{title}</p>
                    <p className={`${styles.subtitle}`}>  {subtitle}
                    </p>
                </>


            }

        </div>
    )
} 