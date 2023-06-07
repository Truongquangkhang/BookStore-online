import axiosClient from './axiosClient'

const apiBook = {
    getAll: ()=>{
       const url = '/book';
       return axiosClient.get(url)
    },
    createBook: (Book)=>{
        const url = "/book";
        return axiosClient.post(url,Book,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
    },
    test: (Book)=>{
        const url = "/book/test";
        return axiosClient.post(url,Book)
        
    }
}

export default apiBook