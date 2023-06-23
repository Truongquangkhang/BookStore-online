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
    detailBook: (id)=>{
        const url = `/book/${id}`;
        return axiosClient.get(url)
        
    },
    updateBook: (id,Book)=>{
      const url = `/book/${id}`
      return axiosClient.put(url,Book,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    },
    deleteBook: (id)=>{
      const url = `/book/${id}`
      return axiosClient.delete(url)
    }
}

export default apiBook