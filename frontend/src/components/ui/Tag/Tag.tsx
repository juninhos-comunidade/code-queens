import styles from './tag.module.scss';
interface TagProps {
    text: string;
    className?: string,
}

export const Tag = ({text,className, ...props} :TagProps) => {
    return(
         <span className={`${styles.tag} ${className}`} {...props}>{text}</span>
    )
}