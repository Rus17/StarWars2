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

// ---------------- Подробная информация о пользователе ----------------
export const getUserInformation = (id) => {
   return axios.get(`${server}profile/${id}`)
   .then(response => response.data)
}

// ---------------- Получить Информация обо мне ----------------
export const getMeInformation = () => {
   return axios.get(`${server}auth/me`, {withCredentials: true})
   .then(response => response.data)
}

// ---------------- Получить Статус пользователя ----------------
export const getUserStatus = (id) => {
   return axios.get(`${server}profile/status/${id}`)   
   .then(response => response.data)
}

// ---------------- Изменить Статус ----------------
export const setStatus = (status) => {
   return axios.put(`${server}profile/status/`, {status: status}, {
               withCredentials: true,
               headers: {
                  "API-KEY": "c86af9ce-a29c-40d5-b1c6-4a73d8999ab7"
               }})   
}

// ---------------- Залогинится ----------------
export const loginPost = (email, password, rememberMe) => {       // Для заглушки можно указать rememberMe = false
   
   return axios.post(`${server}auth/login/`, {email, password, rememberMe}, {
               withCredentials: true,
               headers: {
                  "API-KEY": "c86af9ce-a29c-40d5-b1c6-4a73d8999ab7"
               }})
}

// ---------------- Отлогинится ----------------
export const loginDelete = () => {
   return axios.delete(`${server}auth/login/`, {
               withCredentials: true,
               headers: {
                  "API-KEY": "c86af9ce-a29c-40d5-b1c6-4a73d8999ab7"
               }}) 
}








