
import styles from './radio_button.module.scss';

type OptionGroup = {
    id: string,
    value: string,
    label: string,
}

interface RadioButtonProps {
    errorMessage?: string,
    onChange?: (value: string) => void;
    optionGroup: OptionGroup[],
}

export const RadioButton = ({ errorMessage, optionGroup,onChange }: RadioButtonProps) => {
    return (
        <div className={styles.radioButtonContainer}>
            {
                optionGroup?.map((option, key) => (
                    <span className={styles.optionContainer} key={key}>
                        <input type='radio' className={styles.radio} name={option.id} id={option?.value} onChange={() => onChange?.(option.value)} />
                        <label htmlFor={option?.value} className={styles.label} >
                            {option?.label}
                        </label>
                    </span>
                ))
            }

            {errorMessage && (
                <span className={styles.helperText}>{errorMessage ?? 'Campo incorreto'}</span>
            )}
        </div>
    )
}