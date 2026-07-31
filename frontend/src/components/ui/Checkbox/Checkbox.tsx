
import styles from './checkbox.module.scss';

interface CheckboxProps {
    value: string,
    label: string,
    onChange?: (value: any) => void
}

export const Checkbox = ({ label, value, onChange }: CheckboxProps) => {

    return (
        <span className={styles.checkbox}>
            <input onChange={() => onChange?.(value)} type="checkbox" id={value} value={value} />
            <label htmlFor={value} className={styles.label}>{label}</label>
        </span>

    )
}
