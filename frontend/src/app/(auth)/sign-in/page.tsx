'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData, useSignIn, } from "./useSignIn";

import { Input, Checkbox, AuthContainer, Toast } from "@/components";
import { useForm } from "react-hook-form";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: '', password: '' },
        mode: "onChange",
    })

    const { isLoading, error, handleLogin } = useSignIn();
    return (
        <AuthContainer
            submit={handleSubmit(handleLogin)}
            isLoading={isLoading}
            disabled={!isValid}
            title="Acesse sua conta"
            buttonTitle="Entrar"
            subtitle="Acesse sua conta para continuar aprendendo e evoluindo."
            msgFallback={error}
            toasts={<Toast
                variable='primary'
                title="Por que pedimos essas informações?"
                subtitle={"Seu e-mail e senha são necessários para identificar seu perfil de progresso, garantir que suas conquistas fiquem salvas e manter um ambiente de aprendizado seguro."}
            />}
            formChildren={
                <>
                    <Input
                        label="E-mail"
                        labelFor="email"
                        placeholder="Digite seu email"
                        type="email"
                        msgError={errors?.email?.message}
                        {...register("email")}
                    />
                    <Input
                        label="Senha"
                        labelFor="password"
                        placeholder="Digite sua senha"
                        isPassword={true}
                        msgError={errors?.password?.message}
                        {...register("password")}
                    />
                </>
            }
            optionalChildren={
                <>
                    Ainda não tem uma conta?
                    <a href="/sign-up">Crie sua conta</a>
                </>
            }
            helperChildren={
                <>
                    <Checkbox label="Lembrar de mim" value="lembrar_de_mim" />
                    <a href="/">Esqueci minha senha</a>
                </>
            }
        />
    )
}
export default SignIn;