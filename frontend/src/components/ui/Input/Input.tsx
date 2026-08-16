'use client'
import { InputHTMLAttributes, ReactNode, useState } from 'react';

import { IMaskInput, IMask } from 'react-imask';

import { Eye, EyeClosed } from 'lucide-react';
import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    labelFor: string,
    text?: string,
    icon?: ReactNode,
    disabled?: boolean,
    required?: boolean,
    msgError?: string,
    mask?: string,
    onAccept?: (value: string) => void;
    isPassword?: boolean,
    showPassword?: boolean,

}
export const Input = ({ label, labelFor, text, disabled, icon
    , required, msgError, mask, onAccept, isPassword, showPassword, ...props }: InputProps) => {
    const [visiblePassword, setVisiblePassword ] = useState<boolean>(false)
    const visiblePasswordIcon = visiblePassword
        ? <Eye className={styles.eye_icon} size={20} />
        : <EyeClosed className={styles.eye_icon} size={20} />;

    return (
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={labelFor}>
                {label}
            </label>
            {
                mask ?
                    <IMaskInput
                        id={labelFor}
                        mask="d/m/Y"
                        lazy={true}
                        autofix
                        placeholder='01/01/1991'
                        onAccept={(value) => {
                            onAccept?.(String(value));
                        }}
                        blocks={{
                            d: {
                                mask: IMask.MaskedRange,
                                from: 1,
                                to: 31,
                                maxLength: 2,
                            },
                            m: {
                                mask: IMask.MaskedRange,
                                from: 1,
                                to: 12,
                                maxLength: 2,
                            },
                            Y: {
                                mask: IMask.MaskedRange,
                                from: 1900,
                                to: 2999,
                                maxLength: 4,
                            },
                        }}
                    />
                    :

                    <input
                        id={labelFor}
                        className={`${styles.input}`}
                        aria-labelledby={labelFor}
                        disabled={disabled}
                        required={required}
                        aria-required={required}
                        type={isPassword && !visiblePassword ? 'password' : 'text'}
                        {...props}
                    />

            }
            {isPassword && (
                <button className={styles.icon_container} type="button" onClick={() => setVisiblePassword(!visiblePassword)}>
                    {visiblePasswordIcon}
                </button>
            )}

            <p className='small errormsg'>{msgError}</p>
        </div>
    )
}