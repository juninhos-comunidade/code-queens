import styles from './button.module.scss';

type Variants = "primary" | 'secondary' | 'outline' | 'tertiary';

type ButtonProps = {
    text?: string,
    disabled?: boolean,
    variant?: Variants,
    onClick?: () => void
}
export const Button = ({ text, disabled, onClick, variant, ...props} : ButtonProps) => {
 return(
    <button className={`${styles.button} ${styles[variant ?? 'primary']}`} disabled={disabled}>{text ?? 'Click me' }</button>
 )
}