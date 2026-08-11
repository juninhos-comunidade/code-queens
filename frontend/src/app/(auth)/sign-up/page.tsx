'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeSchema, SubscribeFormData } from "./useSignUp";

import { Input, Select, Checkbox, AuthContainer } from "@/components";
import { useForm } from "react-hook-form";
import { useSignUp } from "./useSignUp";


const SignIn = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, } = useForm<SubscribeFormData>({
        resolver: zodResolver(subscribeSchema),
        defaultValues: {
            full_name: '',
            email: '',
            birth_date: '',
            uf: '',
            gender: '',
            password: '',
            confirmPassword: '',
            id_security_questions: 0,
            answer_security_question: '',
            termsAcepted: false
        },
        mode: 'onChange'
    })
   const {isLoading, handleCreateUser} = useSignUp()
    return (
        <div>         
            <AuthContainer
                submit={handleSubmit(handleCreateUser)}
                buttonTitle={'Criar conta'}
                title="Criar conta"
                subtitle="Crie sua conta para começar a trilhar seus conhecimentos"
                isLoading={isLoading}
                formChildren={
                    <>
                        <Input
                            label="Nome completo"
                            labelFor="fullname"
                            placeholder="Ex.: Maria Silva"
                            type="text"
                            msgError={errors?.full_name?.message}
                            {...register("full_name")}
                        />
                        <Input
                            label="E-mail"
                            labelFor="email"
                            placeholder="exemplo@dominio.com"
                            type="email"
                            msgError={errors?.email?.message}
                            {...register("email")}
                        />
                        <Input
                            label="Data de nascimento"
                            labelFor="birthDate"
                            placeholder="DD/MM/AAAA"
                            type="text"
                            msgError={errors?.birth_date?.message}
                            {...register("birth_date")}
                        />
                        <Select
                            label="Estado"
                            labelFor="uf"
                            options={[{ value: 'sp', label: 'SP' }, { value: 'rj', label: 'RJ' }]}
                            errorMessage={errors?.uf?.message}
                            {...register("uf")}
                        />

                        <Select
                            label="Gênero"
                            labelFor="gender"
                            options={[{ value: 'fem', label: 'Feminino' }, { value: 'masc', label: 'Masculino' }]}
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
                            errorMessage={errors?.id_security_questions?.message}
                            {...register("id_security_questions")}
                        />
                        <Input
                            label="Resposta"
                            labelFor="securityAwnser"
                            placeholder="Digite sua resposta"
                            type="text"
                            msgError={errors?.answer_security_question?.message}
                            {...register("answer_security_question")}
                        />
                    </>
                }
                helperChildren={
                    <div>
                        <Checkbox
                            value="concordo_com_termos"
                            label={
                                <label>
                                    Li e concordo com os
                                    <a href="/terms-of-use">Termos de uso</a> e a{' '}
                                    <a href="/privacy-policy">Política de privacidade</a>.
                                </label>
                            }
                            msgError={errors?.termsAcepted?.message}
                            {...register("termsAcepted")}
                        />
                    </div>
                }
            />
        </div>
    )
}
export default SignIn;