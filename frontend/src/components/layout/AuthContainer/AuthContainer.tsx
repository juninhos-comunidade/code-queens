'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "./useAuth";

import { SignCard, Input, Checkbox, Button } from "@/components";
import styles from './auth_container.module.scss'
import { useForm } from "react-hook-form";
import { ReactNode } from "react";


interface AuthContainerProps {
    title: string,
    subtitle: string,
    optionalChildren?: ReactNode,
    formChildren?: ReactNode,
    children?: ReactNode,
    isNotForm?: boolean,
    submit?: () => void
}
export const AuthContainer = ({ title, subtitle, children, optionalChildren,submit, formChildren, isNotForm }: AuthContainerProps) => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: '', password: '' }
    })
    const onSubmit = (data: LoginFormData) => {
        console.log("Valid form data payload:", data);
    }
    return (
        <div className={styles.page}>
            {/* Dinamico  */}
            <div className={styles.introdution_section}>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>

            <SignCard>
                {isNotForm ?
                    <>
                        {children}
                    </> :

                    <form onSubmit={submit}>
                        <Input
                            label="E-mail"
                            labelFor="email"
                            placeholder="Digite seu email"
                            type="email"
                            {...register("email")}
                        />
                        <Input
                            label="Senha"
                            labelFor="password"
                            placeholder="Digite sua senha"
                            type="password"
                            msgError={errors?.password?.message}
                            {...register("password")}
                        />
                        <div className={styles.passwordHelper}>
                            <Checkbox label="Lembrar de mim" value="lembrar_de_mim" />
                            <a href="/">Esqueci minha senha</a>
                        </div>
                        <Button type="submit" text="Entrar" disabled={isSubmitting} />
                    </form>
                }


                {/*Dinamico daqui pra baixo */}
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
