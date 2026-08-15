import styles from './chip.module.scss';
type Variables = 'advanced' | 'intermediary' | 'basic' | 'initial' | undefined;
interface ChipProps {
    text: string;
    variable?: Variables | string;
}

export const Chip = (
    { 
        text,
        variable,
        ...props
    }: ChipProps) => {
    return (
        <span {...props} className={`${styles.chip} ${variable && styles[variable]}`} {...props}>{text}</span>
    )
}