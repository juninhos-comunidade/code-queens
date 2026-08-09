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
    
    