'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeSchema, SubscribeFormData } from "./useSignUp";

import { Input, Select, Checkbox, AuthContainer, Toast } from "@/components";
import { useForm, Controller } from "react-hook-form";
import { useSignUp } from "./useSignUp";


const SignIn = () => {
    const { register, handleSubmit, control, formState: { errors, isSubmitting, isValid }, } = useForm<SubscribeFormData>({
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
            accepted: false
        },
        mode: 'onChange'
    })
    const {error, isLoading, handleCreateUser } = useSignUp()
    const genders = [{ value: 'fem', label: 'Feminino' }, { value: 'masc', label: 'Masculino' }]
    const states = [
        { value: "AC", label: "Acre" },
        { value: "AL", label: "Alagoas" },
        { value: "AP", label: "Amapá" },
        { value: "AM", label: "Amazonas" },
        { value: "BA", label: "Bahia" },
        { value: "CE", label: "Ceará" },
        { value: "DF", label: "Distrito Federal" },
        { value: "ES", label: "Espírito Santo" },
        { value: "GO", label: "Goiás" },
        { value: "MA", label: "Maranhão" },
        { value: "MT", label: "Mato Grosso" },
        { value: "MS", label: "Mato Grosso do Sul" },
        { value: "MG", label: "Minas Gerais" },
        { value: "PA", label: "Pará" },
        { value: "PB", label: "Paraíba" },
        { value: "PR", label: "Paraná" },
        { value: "PE", label: "Pernambuco" },
        { value: "PI", label: "Piauí" },
        { value: "RJ", label: "Rio de Janeiro" },
        { value: "RN", label: "Rio Grande do Norte" },
        { value: "RS", label: "Rio Grande do Sul" },
        { value: "RO", label: "Rondônia" },
        { value: "RR", label: "Roraima" },
        { value: "SC", label: "Santa Catarina" },
        { value: "SP", label: "São Paulo" },
        { value: "SE", label: "Sergipe" },
        { value: "TO", label: "Tocantins" },
    ];

    const securityAsks = [
        { value: 1, label: 'Qual o nome do seu primeiro animal de estimação?' },
        { value: 2, label: 'Qual o nome da sua primeira escola?' },
        { value: 3, label: 'Qual o nome do seu melhor amigo?' }
    ]
    return (
        <div>
            <AuthContainer
                submit={handleSubmit(handleCreateUser)}
                buttonTitle={'Criar conta'}
                title="Criar conta"
                subtitle="Crie sua conta para começar a trilhar seus conhecimentos"
                isLoading={isLoading}
                msgFallback={error}
                toasts={<Toast
                variable='warning'
                title="Por que responder a pergunta de segurança?"
                subtitle={"A pergunta e a resposta de segurança são utilizadas para confirmar sua identidade caso você precise recuperar ou redefinir sua senha."} 
            /> }
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
                        <Controller
                            name="birth_date"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Input
                                    id="birth_date"
                                    labelFor="birth_date"
                                    label="Data de nascimento"
                                    mask="date"
                                    value={field.value}
                                    onAccept={(value) => {
                                        field.onChange(value);
                                    }}
                                    onBlur={field.onBlur}
                                    name={field.name}
                                    msgError={fieldState.error?.message}
                                />
                            )}
                        />
                        <Select
                            label="Estado"
                            labelFor="uf"
                            options={states}
                            getOptionValue={(uf) => uf.value}
                            getOptionLabel={(uf) => uf.label}
                            errorMessage={errors?.uf?.message}
                            {...register("uf")}
                        />

                        <Select
                            label="Gênero"
                            labelFor="gender"
                            options={genders}
                            getOptionValue={(gender) => gender.value}
                            getOptionLabel={(gender) => gender.label}
                            errorMessage={errors?.gender?.message}
                            {...register("gender")}
                        />

                        <Input
                            label="Senha"
                            labelFor="password"
                            placeholder="Digite sua senha"
                            isPassword={true}
                            showPassword={true}
                            msgError={errors?.password?.message}
                            {...register("password")}
                        />
                        <Input
                            label="Confirmar senha"
                            labelFor="confirmPassword"
                            placeholder="Digite sua senha"
                            isPassword={true}
                            msgError={errors?.confirmPassword?.message}
                            {...register("confirmPassword")}
                        />

                        <Select
                            label="Pergunta de segurança"
                            labelFor="securityAsk"
                            options={securityAsks}
                            getOptionValue={(ask) => ask.value}
                            getOptionLabel={(ask) => ask.label}
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
                        <Controller
                            name="accepted"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Checkbox
                                    id="termsAccepted"
                                    name="termsAccepted"
                                    label={
                                        <>
                                            Li e concordo com os{' '}
                                            <a href="/terms">
                                                Termos de uso
                                            </a>{' '}
                                            e a{' '}
                                            <a href="/privacy-policy">
                                                Política de privacidade
                                            </a>.
                                        </>
                                    }
                                    checked={!!field.value}
                                    onChange={(event) => {
                                        field.onChange(
                                            event.target.checked
                                        );
                                    }}
                                    msgError={fieldState.error?.message}
                                />
                            )}
                        />
                    </div>
                }
            />
        </div>
    )
}
export default SignIn;