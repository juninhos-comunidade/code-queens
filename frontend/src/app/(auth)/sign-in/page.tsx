'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "./useAuth";

import { SignCard, Input, Checkbox, Button } from "@/components";
import { useAuth } from "./useAuth";

import styles from './page.module.scss'
import { useForm } from "react-hook-form";



const SignIn = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: '', password: '' }
    })
    const onSubmit = (data: LoginFormData) => {
        console.log("Valid form data payload:", data);
    }
    return (
        <div className={styles.page}>
            <div className={styles.introdution_section}>
                <h4>Entrar na sua conta</h4>
                <p>Acesse sua conta para continuar aprendendo e evoluindo</p>
            </div>
            <SignCard>

                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Button type="submit" text="Entrar" disabled={isSubmitting}/>

                    <div className={styles.divisor}>
                        <hr /><p>ou</p> <hr />
                    </div>
                    <span className={styles.optinalContainer}>
                        Ainda não tem uma conta?
                        <a href="/sign-up">Crie sua conta</a>
                    </span>
                </form>
            </SignCard>
        </div>
    )
}
export default SignIn;