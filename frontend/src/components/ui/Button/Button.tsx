import { ButtonHTMLAttributes, ReactNode } from 'react';

import { LoaderCircle } from 'lucide-react';

import styles from './button.module.scss';

type Variants = "primary" | 'secondary' | 'outline' | 'tertiary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string,
    icon?: ReactNode,
    children?: ReactNode
    disabled?: boolean,
    variant?: Variants,
    isLoading?: boolean

}
export const Button = ({ text, disabled, variant, icon, children, isLoading = false, ...props }: ButtonProps) => {

    return (
        <button {...props} className={`${styles.button} ${styles[variant ?? 'primary']} ${styles[children ? 'rounded' : '']}`}
            disabled={disabled || isLoading}>
            {isLoading && <span className={styles.loading}><LoaderCircle /></span>}
            
            {!isLoading && (!children ?
                (
                    <>{icon && icon} {text}</>
                ) :
                children)
            }
        </button>
    )
}