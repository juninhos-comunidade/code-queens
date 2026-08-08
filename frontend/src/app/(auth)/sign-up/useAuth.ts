'use client'
import { z } from 'zod';

export const subscribeSchema = z.object({
    fullname: z.string(),
    email: z.email(),
    birthDate: z.iso.date(),
    state: z.string(),
    gender: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
    securityAsk: z.string(),
    securityAwnser: z.string(),
    termsAcepted: z.literal(true)
})
export type SubscribeFormData = z.infer<typeof subscribeSchema>;


export const useAuth = () => {
    const user = 'Kelly'

    return { user }
}

