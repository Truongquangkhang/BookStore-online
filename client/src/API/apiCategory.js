import axiosClient from "./axiosClient";

const apiCategory = {
    getAll: () => {
        const url = '/category';
        return axiosClient.get(url)
    },
    createAuthor: (data)=>{
        const url = '/category';
        return axiosClient.post(url,data)
    }
}


export default apiCategory