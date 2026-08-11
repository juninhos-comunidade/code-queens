export interface User {
    id_users: string,
    email: string,
    full_name: string,
    birth_date: string,
    uf: string,
    gender: string,
    id_security_questions: number,
    id_roles: number,
    timezone_origem: string,
    last_login: string,
    accepted: boolean | null,

}
