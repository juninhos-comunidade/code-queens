import { InputHTMLAttributes, ReactNode } from 'react';


import { Eye, EyeClosed } from 'lucide-react';
import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    labelFor: string,
    text?: string,
    icon?: ReactNode,
    disabled?: boolean,
    required?: boolean,
    msgError?: string,
    isPassword?: boolean,
    showPassword?: boolean

}
export const Input = ({ label, labelFor, text, disabled, icon
    , required, msgError, isPassword, showPassword, ...props }: InputProps) => {
    const visiblePasswordIcon = showPassword
        ? <EyeClosed className={styles.eye_icon} size={20} />
        : <Eye className={styles.eye_icon} size={20} />;

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
            {isPassword && (
                <button type="button" onClick={(e) => console.log('click', e)}>

                    {visiblePasswordIcon
                    }                </button>
            )}
            <p>{msgError}</p>
        </div>
    )
}