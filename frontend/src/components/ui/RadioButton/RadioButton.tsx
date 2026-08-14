
import styles from './radio_button.module.scss';
type OptionGroup = Record<string, unknown>;

interface RadioButtonProps<T extends OptionGroup> {
    errorMessage?: string,
    onChange?: (value: string) => void;
    optionGroup: T[];
    valueKey: keyof T;
    labelKey: keyof T;
}

export const RadioButton = <T extends OptionGroup>({ errorMessage, optionGroup, valueKey, labelKey, onChange }: RadioButtonProps<T>) => {
    return (
        <div className={styles.radioButtonContainer}>
            {
                optionGroup?.map((option, key) => (
                    <span className={styles.optionContainer} key={key}>
                        <input
                            type='radio'
                            className={styles.radio}
                            name={String(valueKey)}
                            id={String(option[valueKey])}
                            value={String(option[valueKey])}
                            onChange={() => onChange?.(String(option[valueKey]))}
                        />
                        <label htmlFor={String(option[valueKey])}
                            className={styles.label} >
                            {String(option[labelKey])}
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