export const encryptData = async (data: string) => {
    const encodedData = new TextEncoder().encode(data);

    const key = await globalThis.crypto.subtle.generateKey(
        {
            name: 'AES-GCM',
            length: 256,
        },
        true,
        ['encrypt'],
    );

    const iv = globalThis.crypto.getRandomValues(
        new Uint8Array(12),
    );

    const encryptedData = await globalThis.crypto.subtle.encrypt(
        {
            name: 'AES-GCM',
            iv,
        },
        key,
        encodedData,
    );

    return Buffer.from(encryptedData).toString('base64url');
};