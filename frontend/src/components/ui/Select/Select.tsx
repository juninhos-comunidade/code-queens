import { SelectHTMLAttributes } from 'react';

import styles from './select.module.scss';

interface SelectProps<T> extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string,
    labelFor: string,
    options: T[];
    getOptionValue: (option: T) => string | number;
    getOptionLabel: (option: T) => string;
    errorMessage?: string,
}
export const Select = <T,>({ label, labelFor, options,  getOptionValue,getOptionLabel, required = true, errorMessage, onChange, value, ...props }: SelectProps<T>) => {
    const isNumberValues = (value: string | number) => typeof value === 'number'
    return (
        <div className={styles.selectContainer}>
            <label htmlFor={labelFor} className={styles.label}>
                {label}
            </label>
            <select required={required} id={labelFor} name={labelFor} className={styles.select} onChange={(e) => { onChange?.(e) }} {...props}>
                <option value={0} >Selecione uma opção</option>

                {options.map((option) => {
                    const value = getOptionValue(option);

                    return (
                        <option key={value} value={value}>
                            {getOptionLabel(option)}
                        </option>
                    );
                })}
            </select>
            {errorMessage && (
                <span className={styles.helperText}>{errorMessage ?? 'Campo incorreto'}</span>
            )}
        </div>
    )
}