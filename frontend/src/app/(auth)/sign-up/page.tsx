'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeSchema, SubscribeFormData } from "./useAuth";

import { SignCard, Input, Checkbox, Button, Select } from "@/components";
import { useAuth } from "./useAuth";

import styles from './page.module.scss'
import { useForm } from "react-hook-form";



const SignIn = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<SubscribeFormData>({
        resolver: zodResolver(subscribeSchema),
        defaultValues: {fullname: '',email: '',birthDate: '',state: '',gender: '',password: '',confirmPassword: '',securityAsk: '',securityAwnser: '',termsAcepted: true }

           
    })
    const onSubmit = (data: SubscribeFormData) => {
        console.log("Valid form data payload:", data);
    }
    return (
        <main className={styles.page}>
            <div className={styles.introdution_section}>
                <h4>Criar conta</h4>
                <p>Crie sua conta para começar a trilhar seus conhecimentos</p>
            </div>
            <SignCard>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Nome completo"
                        labelFor="fullname"
                        placeholder="Ex.: Maria Silva"
                        type="text"
                        {...register("fullname")}
                    />
                    <Input
                        label="E-mail"
                        labelFor="email"
                        placeholder="exemplo@dominio.com"
                        type="email"
                        {...register("email")}
                    />
                    <Input
                        label="Data de nascimento"
                        labelFor="birthDate"
                        placeholder="DD/MM/AAAA"
                        type="text"
                        msgError={errors?.birthDate?.message}
                        {...register("birthDate")}
                    />
                    <Select
                        label="Estado"
                        labelFor="state"
                        options={[{ value: 'sp', label: 'SP' }, { value: 'rj', label: 'RJ' }]}
                        required
                        errorMessage={errors?.state?.message}
                        {...register("state")}
                    />

                    <Select
                        label="Gênero"
                        labelFor="gender"
                        options={[{ value: 'fem', label: 'Feminino' }, { value: 'masc', label: 'Masculino' }]}
                        required

                        errorMessage={errors?.gender?.message}
                        {...register("gender")}
                    />

                    <Input
                        label="Senha"
                        labelFor="password"
                        placeholder="Digite sua senha"
                        type="password"
                        msgError={errors?.password?.message}
                        {...register("password")}
                    />
                    <Input
                        label="Confirmar senha"
                        labelFor="confirmPassword"
                        placeholder="Digite sua senha"
                        type="password"
                        msgError={errors?.confirmPassword?.message}
                        {...register("confirmPassword")}
                    />
                    <Input
                        label="Pergunta de segurança"
                        labelFor="securityAsk"
                        placeholder="Selecione uma pergunta"
                        type="text"
                        msgError={errors?.securityAsk?.message}
                        {...register("securityAsk")}
                    />
                    <Input
                        label="Resposta"
                        labelFor="securityAwnser"
                        placeholder="Digite sua resposta"
                        type="text"
                        msgError={errors?.securityAwnser?.message}
                        {...register("securityAwnser")}
                    />
                    <div className={styles.passwordHelper}>
                        <Checkbox
                            value="lembrar_de_mim"
                            label="Li e concordo com os Termos de Uso e a Política de Privacidade."
                            {...register("termsAcepted")}
                            onChange={() => { }}
                        />

                    </div>
                    <Button type="submit" text="Criar conta" disabled={isSubmitting} />

                    <div className={styles.divisor}>
                        <hr /><p>ou</p> <hr />
                    </div>
                    <span className={styles.optinalContainer}>
                       Já tem uma conta?
                        <a href="/sign-in">Clique aqui para entrar</a>
                    </span>
                </form>
            </SignCard>
        </main>
    )
}
export default SignIn;