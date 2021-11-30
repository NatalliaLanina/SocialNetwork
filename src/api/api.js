import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": '5a2ea525-ce0e-4154-b47e-600d0872fe12'
  },
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
      withCredentials: true
    }).then(response => {
      return response.data
    })
  },

  getProfile(id) {
    return instance.get(`profile/${id}`, {
      withCredentials: true
    }).then(response => {
      return response.data
    })
  },

  follow(id) {
    return instance.post(`follow/${id}`, {
      withCredentials: true
    }).then(response => {
      return response.data
    })
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`, {
      withCredentials: true
    }).then(response => {
      return response.data
    })
  },
}

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`, {
      withCredentials: true
    }).then(response => {
      return response.data
    })
  },
}