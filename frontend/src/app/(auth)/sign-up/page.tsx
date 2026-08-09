'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeSchema, SubscribeFormData } from "./useAuth";

import { Input, Select, Checkbox, AuthContainer } from "@/components";
import { useForm } from "react-hook-form";



const SignIn = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<SubscribeFormData>({
        resolver: zodResolver(subscribeSchema),
        defaultValues: {
            fullname: '',
            email: '',
            birthDate: '',
            state: '',
            gender: '',
            password: '',
            confirmPassword: '',
            securityAsk: 0,
            securityAwnser: '',
            termsAcepted: true
        }

    })
    const onSubmit = (data: SubscribeFormData) => {
        console.log("teste");
        console.log("Valid form data payload:", data);
    }
    return (
        <div>
            <AuthContainer
                submit={handleSubmit(onSubmit)}
                title="Criar conta"
                subtitle="Crie sua conta para começar a trilhar seus conhecimentos"
                isLoading={isSubmitting}
                formChildren={
                    <>
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

                        <Select
                            label="Pergunta de segurança"
                            labelFor="securityAsk"
                            options={[
                                { value: 1, label: 'Qual o nome do seu primeiro animal de estimação?' },
                                { value: 2, label: 'Qual o nome da sua primeira escola?' },
                                { value: 3, label: 'Qual o nome do seu melhor amigo?' }
                            ]}
                            required
                            errorMessage={errors?.securityAsk?.message}
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
                    </>
                }
                helperChildren={
                    <div>
                        <Checkbox
                            value="lembrar_de_mim"
                            label={
                                <label>
                                    Li e concordo com os
                                    <a href="/terms-of-use">Termos de uso</a> e a{' '}
                                    <a href="/privacy-policy">Política de privacidade</a>.
                                </label>
                            }
                            {...register("termsAcepted")}
                            onChange={() => { }}
                        />
                    </div>
                }
            />
        </div>
    )
}
export default SignIn;