
import styles from './radio_button.module.scss';
type OptionGroup = Record<string, unknown>;

interface RadioButtonProps<T extends OptionGroup> {
    errorMessage?: string,
    onChange?: (value: string) => void;
    optionGroup: T[];
    valueKey: keyof T;
    labelKey: keyof T;
    value?: string;
}

export const RadioButton = <T extends OptionGroup>({ errorMessage, optionGroup, valueKey, labelKey, value, onChange }: RadioButtonProps<T>) => {
    return (
      <div className={styles.radioButtonContainer}>
    {
        optionGroup?.map((option) => {
            const optionValue = String(option[valueKey]);

            return (
                <span
                    className={styles.optionContainer}
                    key={optionValue}
                >
                    <input
                        type="radio"
                        className={styles.radio}
                        name={String(valueKey)}
                        id={optionValue}
                        value={optionValue}
                        checked={value === optionValue}
                        onChange={() => onChange?.(optionValue)}
                    />

                    <label
                        htmlFor={optionValue}
                        className={styles.label}
                    >
                        {String(option[labelKey])}
                    </label>
                </span>
            );
        })
    }

    {errorMessage && (
        <span className={styles.helperText}>
            {errorMessage ?? 'Campo incorreto'}
        </span>
    )}
</div>
    )
}