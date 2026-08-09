import { SelectHTMLAttributes } from 'react';

import styles from './select.module.scss';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string,
    labelFor: string,
    options: { value: string | number, label: string }[],
    errorMessage?: string,
}
export const Select = ({ label, labelFor, options, required = true, errorMessage,onChange, value, ...props }: SelectProps) => {
    const isNumberValues = (value: string | number) => typeof value === 'number'
    return (
        <div className={styles.selectContainer}>
            <label htmlFor={labelFor} className={styles.label}>
                {label}
            </label>
            <select required={required} id={labelFor} name={labelFor} className={styles.select} onChange={(e) => {onChange?.(e)}} {...props}>
                <option value={isNumberValues(options[0]?.value) ? 0 : ''} >Selecione uma opção</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errorMessage && (
                <span className={styles.helperText}>{errorMessage ?? 'Campo incorreto'}</span>
            )}
        </div>
    )
}