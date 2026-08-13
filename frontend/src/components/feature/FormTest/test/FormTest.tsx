'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { testSchema, TestFormData, useTest } from "./useFormTest";

import { Button, Checkbox, Select } from "@/components";
import { useForm } from "react-hook-form";

import styles from './form_teste.module.scss'


export const FormTest = () => {
    const { register,watch, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<TestFormData, unknown, TestFormData>({
        resolver: zodResolver(testSchema),
        defaultValues: {
            technical_area: 0,
            seniority: 0,
            id_stacks: [],
        },
        mode: 'onChange'
    })

    const { isLoading, handleTest,info, step, technicalArea, levels, stacks, changeStep } = useTest()
    return (
        <div className={styles.test_container}>
            <h5>{info[step].title}</h5>
            <p>{info[step].subtitle}</p>
            <form onSubmit={handleSubmit(
    handleTest,
    (errors) => {
      console.log("ERROS DE VALIDAÇÃO:", errors);
    }
  )}>
                {
                    step === 0 ?
                        <>
                            <Select
                                label="Frente"
                                labelFor="Area:"

                                options={technicalArea}
                                getOptionValue={(area) => area.id}
                                getOptionLabel={(area) => area.description}
                                {...register("technical_area", {
                                    valueAsNumber: true
                                })}
                                errorMessage={errors?.technical_area?.message}
                            />
                            <Select
                                label="Nível de senioridade"
                                labelFor="senioridade"
                                options={levels}
                                getOptionValue={(level) => level.id_levels}
                                getOptionLabel={(level) => level.levels_name}
                                errorMessage={errors?.seniority?.message}
                                {...register("seniority", {
                                    valueAsNumber: true
                                })}
                            />
                            <div className={styles.button_container}>
                                <Button text="Cancelar" variant="ghost"  />
                                <Button text="Avançar" isLoading={isLoading} onClick={() => changeStep('go')}/>
                            </div>
                        </>
                        :
                        <>
                            <div className={styles.options_container}>

                                {
                                    stacks.map(stack => (

                                        <span className={styles.checkbox_container} key={stack.id_stacks}>
                                            <Checkbox 
                                            value={stack.id_stacks} 
                                            label={stack.stacks_name} 
                                            {...register("id_stacks")}
                                            />
                                        </span>
                                    ))
                                }

                            </div>

                            <div className={styles.button_container}>
                                <Button text="Voltar" variant="ghost" onClick={() => changeStep('back')} />
                                <Button text="Gerar teste" type="submit" isLoading={isLoading} />
                            </div>


                        </>
                }
            </form>

        </div>
    )
}
