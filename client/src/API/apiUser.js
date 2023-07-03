import axiosClient from "./axiosClient";
const token = localStorage.getItem('access_token')
const apiUser = {
    getUser: () => {
        const url = '/user/getUser';
        return axiosClient.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

    },

}


export default apiUser