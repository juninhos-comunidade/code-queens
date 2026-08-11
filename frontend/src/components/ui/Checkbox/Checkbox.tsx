
import { InputHTMLAttributes, ReactNode } from 'react';
import styles from './checkbox.module.scss';

interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label: string | ReactNode;
  msgError?: string;
}


export const Checkbox = ({ label, value,msgError, onChange, ...props }: CheckboxProps) => {
    const isStringLabel = typeof label === 'string';

    return (
        <span className={styles.checkbox}>
            <input type="checkbox" id={value} {...props} />
               {
                   isStringLabel ?
                   <label htmlFor={value} className={styles.label}>{label}</label>
                   : label
               }
            <p>{msgError}</p>   
        </span>

    )
}
