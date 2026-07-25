import { InputHTMLAttributes, ReactNode } from 'react';

import { LoaderCircle } from 'lucide-react';

import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    labelFor: string,
    text?: string,
    icon?: ReactNode,
    disabled?: boolean,
    required?: boolean,

}
export const Input = ({ label, labelFor, text, disabled, icon, required, ...props }: InputProps) => {

    return (
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={labelFor}>
                {label}
            </label>

            <input
            id={labelFor}
                className={`${styles.input}`}
                aria-labelledby={labelFor}
                disabled={disabled}
                required={required}
                aria-required={required}
                {...props}
            />
        </div>
    )
}