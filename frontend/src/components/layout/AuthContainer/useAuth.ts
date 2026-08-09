'use client'
import {z} from 'zod';
import { useState } from "react";

export const loginSchema = z.object({
    email: z.string().min(3,'Deve ter mais de 3 letras'),
    password: z.string().min(6, 'Sua senha deve ter mais de 6 digitos')
})
export type LoginFormData = z.infer<typeof loginSchema>;


export const useAuth = () => {
        const user = 'Kelly'

        return {user}
}

