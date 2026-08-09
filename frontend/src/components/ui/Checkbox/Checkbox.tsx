
import { ReactNode } from 'react';
import styles from './checkbox.module.scss';

interface CheckboxProps {
    value: string,
    label: string | ReactNode,
    onChange?: (value: string | number) => void
}

export const Checkbox = ({ label, value, onChange, ...props }: CheckboxProps) => {
    const isStringLabel = typeof label === 'string';

    return (
        <span className={styles.checkbox}>
            <input onChange={() => onChange?.(value)} type="checkbox" id={value} value={value} {...props} />
               {
                   isStringLabel ?
                   <label htmlFor={value} className={styles.label}>{label}</label>
                   : label

               }
        </span>

    )
}
