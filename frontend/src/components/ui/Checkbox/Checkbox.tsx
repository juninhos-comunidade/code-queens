import {
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import styles from './checkbox.module.scss';

interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string | ReactNode;
  msgError?: string;
}

export const Checkbox = ({
  label,
  msgError,
  ...props
}: CheckboxProps) => {
  const isStringLabel = typeof label === 'string';

  return (
    <span className={styles.checkbox}>
      <input
        type="checkbox"
        {...props}
      />

      {isStringLabel ? (
        <label
          htmlFor={props.id}
          className={styles.label}
        >
          {label}
        </label>
      ) : (
        label
      )}

      {msgError && (
        <p>{msgError}</p>
      )}
    </span>
  );
};