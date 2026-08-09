'use server'

import { cookies } from 'next/headers';
import { encryptData } from '@/authSettings/crypto';

export const handleCookie = async ({ userData }: any) => {
    const encryptedData = await encryptData(
        JSON.stringify(userData),
    );

    const cookieStore = await cookies();

    cookieStore.set('session', encryptedData, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
    });
}

