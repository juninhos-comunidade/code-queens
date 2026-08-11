import {api} from './index'

export const postLogin = async (data: any) => {
  console.log('Sending login request with data:', data);
  return api.post('/auth/login', data)
    .then((response) => {
        return response.data;
    }).catch((error) => {
        console.error('Error:', error);
        throw error;
    })
}
    
export const postCreateUser = async (data: any) => {
  console.log('Sending sign-up request with data:', data);
  return api.post('/users', data)
    .then((response) => {
        return response.data;
    }).catch((error) => {
        console.error('Error:', error);
        throw error;
    })
}
    
    