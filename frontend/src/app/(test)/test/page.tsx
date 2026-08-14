'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { testSchema, TestFormData, useTest } from "./useTest";

import { Button, Checkbox, Select } from "@/components";
import { useForm } from "react-hook-form";

import styles from './test.module.scss';
import { FormTest } from "@/components/feature/FormTest/test";


const Test = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<TestFormData>({
        resolver: zodResolver(testSchema),
        defaultValues: {
            technical_area: 0,
            id_level: 0,
        }
    })

    const { isLoading, handleTest } = useTest()
    return (
        <FormTest />
    )
}
export default Test;