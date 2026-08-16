import { SignCard, Button, Toast } from "@/components";
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
    buttonTitle: string,
    msgFallback?: string,
    toasts?: ReactNode,
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
    buttonTitle,
    msgFallback,
    toasts,
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
                        {msgFallback && <p className="small errormsg">***{msgFallback}</p>}
                        <div className={styles.sectionHelper}>
                            {helperChildren}
                        </div>
                        <Button type="submit" text={buttonTitle} disabled={disabled} isLoading={isLoading} />
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

                {toasts}

        </div>
    )
}
