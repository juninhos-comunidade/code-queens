'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { testSchema, TestFormData, useTest } from "./useFormTest";

import { Button, Checkbox, Select } from "@/components";
import { Controller, useForm } from "react-hook-form";

import styles from './form_teste.module.scss'


export const FormTest = () => {
    const { register, handleSubmit, control, formState: { errors, isSubmitting, isValid } } = useForm<TestFormData, unknown, TestFormData>({
        resolver: zodResolver(testSchema),
        defaultValues: {
            technical_area: 0,
            id_levels: 0,
            id_stacks: [],
        },
        mode: 'onChange'
    })

    const { isLoading, handleTest, info, step, technicalArea, levels, stacks, changeStep } = useTest()

    return (
        <div className={styles.test_container}>
            <h5>{info[step].title}</h5>
            <p>{info[step].subtitle}</p>
            <form onSubmit={handleSubmit(
                handleTest
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
                                errorMessage={errors?.id_levels?.message}
                                {...register("id_levels", {
                                    valueAsNumber: true
                                })}
                            />
                            <div className={styles.button_container}>
                                <Button type="button" text="Cancelar" variant="ghost" onClick={() => changeStep('cancel')}/>
                                <Button type="button" text="Avançar" isLoading={isLoading} onClick={() => changeStep('go')} />
                            </div>
                        </>
                        :
                        <>
                            <div className={styles.options_container}>
                                <Controller
                                    name="id_stacks"
                                    control={control}
                                    render={({ field, fieldState }) => (
                                        <>
                                            {stacks.map((stack) => {
                                                const isChecked = field.value.includes(
                                                    stack.id_stacks
                                                );

                                                return (
                                                    <span
                                                        className={styles.checkbox_container}
                                                        key={stack.id_stacks}
                                                    >
                                                        <Checkbox
                                                            id={String(stack.id_stacks)}
                                                            name="id_stacks"
                                                            label={stack.stacks_name}
                                                            checked={isChecked}
                                                            onChange={(event) => {
                                                                const checked =
                                                                    event.target.checked;

                                                                const updatedStacks = checked
                                                                    ? [
                                                                        ...field.value,
                                                                        stack.id_stacks,
                                                                    ]
                                                                    : field.value.filter(
                                                                        (id) =>
                                                                            id !==
                                                                            stack.id_stacks
                                                                    );

                                                                field.onChange(updatedStacks);
                                                            }}
                                                        />
                                                    </span>
                                                );
                                            })}
                                            {field?.value.length >= 1 && fieldState.error && (
                                                <p className={styles.errorMessage}>
                                                    {fieldState.error.message}
                                                </p>
                                            )}
                                        </>
                                    )}
                                />



                            </div>

                            <div className={styles.button_container}>
                                <Button type="button" text="Voltar" variant="ghost" onClick={() => changeStep('back')} />
                                <Button text="Gerar teste" type="submit" isLoading={isLoading} />
                            </div>


                        </>
                }
            </form>

        </div>
    )
}
