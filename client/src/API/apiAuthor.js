import axiosClient from './axiosClient'

const apiAuthor = {
    getAll: ()=>{
       const url = '/author';
       return axiosClient.get(url)
    },
    createAuthor: (data)=>{
        const url= '/author';
        return axiosClient.post(url, data)
    }
}

export default apiAuthor