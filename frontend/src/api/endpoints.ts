import { api } from './index'

export const postCreateUser = async (data: any) => {
    return api.post('/users', data)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}
export const postLogin = async (data: any) => {
    return api.post('/auth/login', data)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}
export const postLogout = async (token: string) => {
    api.post('/auth/logout', token)
    localStorage.clear()
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
export const postAssessmentsQuestionnaire = async (assessment_id: string, data: any) => {
    return api.post(`/assessments/${assessment_id}/submit`, data)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}
export const getAssessmentsHistory = async (id_user: string) => {
    return api.get(`/assessments/${id_user}/history`)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}
export const getAssessmentsHistoryById = async (id_test: string) => {
    return api.get(`/assessments/${id_test}`)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}
export const getUseTerm = async () => {
    return api.get('/terms/usage')
        .then((response) => {
            return response.data.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}
export const getPrivacyPolicy = async () => {
    return api.get('/terms/policy')
        .then((response) => {
            return response.data.data;
        }).catch((error) => {
            console.error('Error:', error);
            throw error;
        })
}
