import styles from './stacktag.module.scss';
import { Tag } from '@/components/ui';

interface TagData {
  stack_name: string;
}

interface StackTagProps {
  options?: TagData[]; 
}

export const StackTag = ({ options }: StackTagProps) => {
    return (
        <div className={styles.stack_tags_container}>
            {
                options?.map((tag: TagData, index: number) => (
                    <>
                    <Tag key={index} text={tag?.stack_name} data-stack={tag?.stack_name?.toLowerCase()} />
                    </>
                ))}
        </div>
    )
}