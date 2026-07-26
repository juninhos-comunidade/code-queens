import { InputHTMLAttributes, ReactNode } from 'react';

import { LoaderCircle } from 'lucide-react';

import styles from './select.module.scss';

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    labelFor: string,
    options: { value: string, label: string }[],
    isInvalid?: boolean,
    errorMessage?: string,

}
export const Select = ({ label, labelFor, options, required = true, isInvalid, errorMessage, ...props }: SelectProps) => {

    return (
        <div className={styles.selectContainer}>
            <label htmlFor={labelFor} className={styles.label}>
                {label}
            </label>
            <select required={required} id={labelFor} name={labelFor} className={styles.select}>

                <option value="" >Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {isInvalid && (
                <span className={styles.helperText}>{errorMessage ?? 'Campo incorreto'}</span>
            )}
        </div>
    )
}