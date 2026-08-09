'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "./useAuth";

import { Input, Checkbox, AuthContainer } from "@/components";
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
        <AuthContainer
            submit={handleSubmit(onSubmit)}
            isLoading={isSubmitting}
            title="Acesse sua conta"
            subtitle="Acesse sua conta para continuar aprendendo e evoluindo."
            formChildren={
                <>
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