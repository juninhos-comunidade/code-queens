'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { testSchema, TestFormData, useTest } from "./useTest";

import { Button, Checkbox, Select } from "@/components";
import { useForm } from "react-hook-form";

import styles from './test.module.scss';


const Test = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<TestFormData>({
        resolver: zodResolver(testSchema),
        defaultValues: {
            technical_area: 0,
            seniority: 0,
        }
    })
    const frente = [
        {
            value: 1,
            label: 'Frontend'
        },
        {
            value: 2,
            label: 'Backend'
        },
        {
            value: 3,
            label: 'Fullstack'
        },
    ]
    const { isLoading, handleTest } = useTest()
    return (
        <div className={styles.test_container}>
            {/* 
            <h5>1. Configure seu teste </h5>
            <p>Comece informando para qual frente e nível você deseja
                testar seus conhecimentos.
            </p>
            
            <form onSubmit={handleSubmit(handleTest)}>
                <Select
                    label="Frente"
                    labelFor="Area:"
                    options={frente}
                    {...register("technical_area", {
                        valueAsNumber: true
                    })}
                    errorMessage={errors?.technical_area?.message}
                />
                <Select
                    label="Nível de senioridade"
                    labelFor="senioridade"
                    options={frente}
                    errorMessage={errors?.seniority?.message}
                    {...register("seniority", {
                        valueAsNumber: true
                    })}
                />
                <div className={styles.button_container}>
                    <Button text="Cancelar" variant="ghost" />
                    <Button text="Avançar" type="submit" isLoading={isLoading} />
                </div>
            </form> */}
            <h5>2. Selecione as stacks</h5>
            <p>Selecione as tecnologias que você domina para gerarmos um teste prático personalizado sob medida para o seu perfil.
            </p>

            <form onSubmit={handleSubmit(handleTest)}>
                <div className={styles.options_container}>

                    <span className={styles.checkbox_container}>

                        <Checkbox value="Java" label={
                            <>
                                Java
                            </>
                        } />
                    </span>
                    <span className={styles.checkbox_container}>

                        <Checkbox value="Java" label={
                            <>
                                PostgreSQL
                            </>
                        } />
                    </span>
                    <span className={styles.checkbox_container}>

                        <Checkbox value="Java" label={
                            <>
                                Javascript
                            </>
                        } />
                    </span>
                    <span className={styles.checkbox_container}>

                        <Checkbox value="Java" label={
                            <>
                                CSS
                            </>
                        } />
                    </span>
                    <span className={styles.checkbox_container}>

                        <Checkbox value="Java" label={
                            <>
                                AssemblyScript
                            </>
                        } />
                    </span>

                    <span className={styles.checkbox_container}>

                        <Checkbox value="Java" label={
                            <>
                                AssemblyScript
                            </>
                        } />
                    </span>
                </div>
                {/*             
                <Select
                    label="Nível de senioridade"
                    labelFor="senioridade"
                    options={frente}
                    errorMessage={errors?.seniority?.message}
                    {...register("seniority", {
                        valueAsNumber: true
                    })}
                /> */}
                <div className={styles.button_container}>
                    <Button text="Voltar" variant="ghost" />
                    <Button text="Gerar teste" type="submit" isLoading={isLoading} />
                </div>
            </form>




        </div>
    )
}
export default Test;