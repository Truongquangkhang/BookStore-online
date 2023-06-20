import axiosClient from './axiosClient'

const apiAuthorization = {
    login: (data)=>{
       const url = '/auth/login';
       return axiosClient.post(url,data)
    },
}

export default apiAuthorization