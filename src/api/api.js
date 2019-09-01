import * as axios from 'axios'

const server = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (currentPage, pageSize) => {
   return  axios.get(`${server}users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
   .then(response => {return response.data})
}

// ---------------- Запрос для отписки ----------------
export const setUnFollow = (id) => {
   return  axios.delete(`${server}follow/${id}`, {
               withCredentials: true,
               headers: {
                  "API-KEY": "c86af9ce-a29c-40d5-b1c6-4a73d8999ab7"
               }}
           ).then(response => response.data)
}

// ---------------- Запрос для подписки ----------------
export const setFollow = (id) => {
   return  axios.post(`${server}follow/${id}`, {}, {
               withCredentials: true,
               headers: {
                  "API-KEY": "c86af9ce-a29c-40d5-b1c6-4a73d8999ab7"
               }}
           ).then(response => response.data)
}

export const getUserInformation = (id) => {
   return axios.get(`${server}profile/${id}`)
   .then(response => response.data)
}

export const getMeInformation = () => {
   return axios.get(`${server}auth/me`, {withCredentials: true})
   .then(response => response.data)
}
