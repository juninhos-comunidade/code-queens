import styles from './tag.module.scss';
interface TagProps {
    text: string;
}

export const Tag = ({text, ...props} :TagProps) => {
    return(
         <span className={styles.tag} {...props}>{text}</span>
    )
}