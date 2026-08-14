import { api } from './index'

export const postLogin = async (data: any) => {
    return api.post('/auth/login', data)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}

export const postCreateUser = async (data: any) => {
    return api.post('/users', data)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}
export const getUser = async (email: string) => {
    return api.get(`/users/email/${email}`)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}

export const getLevels = async () => {
    return api.get('/levels')
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}

export const getStacks = async () => {
    return api.get('/stacks')
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}

export const postAssessments = async (data: any) => {
    return api.post('/assessments', data)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}