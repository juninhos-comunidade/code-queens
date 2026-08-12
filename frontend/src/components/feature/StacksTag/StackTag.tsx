import styles from './stacktag.module.scss';
import { Tag } from '@/components/ui';


interface StackTag {
    options: string[];
}

export const StackTag = ({ options }: any) => {
    return (
        <div className={styles.stack_tags_container}>
            {
                options?.map((tag: string, index: number) => (
                    <Tag key={index} text={tag} data-stack={tag}/>
                ))}
        </div>
    )
}