import { SignCard, Button } from "@/components";
import styles from './auth_container.module.scss'
import { ReactNode } from "react";


interface AuthContainerProps {
    title: string,
    subtitle: string,
    optionalChildren?: ReactNode,
    formChildren?: ReactNode,
    helperChildren?: ReactNode,
    children?: ReactNode,
    isNotForm?: boolean,
    disabled?: boolean,
    isLoading?: boolean,
    submit?: () => void,
}
export const AuthContainer = ({
    title,
    subtitle,
    children,
    optionalChildren,
    formChildren,
    helperChildren,
    isNotForm,
    disabled,
    isLoading,
    submit
}: AuthContainerProps) => {

    return (
        <div className={styles.page}>
            <div className={styles.introdution_section}>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>

            <SignCard>
                {isNotForm ?
                    <>
                        {children}
                    </>
                    :
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        submit?.()
                    }}>
                        {formChildren}
                        <div className={styles.sectionHelper}>
                            {helperChildren}
                        </div>
                        <Button type="submit" text="Entrar" disabled={disabled} isLoading={isLoading} />
                    </form>
                }


                {optionalChildren &&
                    <>
                        <div className={styles.divisor}>
                            <hr /><p>ou</p> <hr />
                        </div>
                        <span className={styles.optionalContainer}>
                            {optionalChildren}
                        </span>
                    </>
                }
            </SignCard>
        </div>
    )
}
