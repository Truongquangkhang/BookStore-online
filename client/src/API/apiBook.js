import axios from 'axios';
import axiosClient from './axiosClient'
const token = localStorage.getItem('access_token');
// const headers = {
//   'Content-Type': 'multipart/form-data',
//   'Authorization': `Bearer ${token}`
// }; 
const apiBook = {
  getAll: () => {
    const url = '/book';
    return axiosClient.get(url)
  },

  getByFilter: (data) => {
    const categories = data.categories
    const authors = data.authors
    const url = `/book?categories=${categories.join(',')}&authors=${authors.join(',')}`;
    return axiosClient.get(url)
  },
  createBook: (Book) => {
    const url = "/book";
    return axiosClient.post(url, Book, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
  },
  detailBook: (id) => {
    const url = `/book/${id}`;
    return axiosClient.get(url)

  },
  updateBook: (id, Book) => {
    const url = `/book/${id}`
    return axiosClient.put(url, Book, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
  },
  deleteBook: (id) => {
    const url = `/book/${id}`
    return axiosClient.delete(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  },

  getPDFOfBook: async (id) => {

    const url = `/book/view/${id}`
    const response = await axiosClient.get(url)
    return response.data
  }
}

export default apiBook