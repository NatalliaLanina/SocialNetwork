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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data
    })
  },

  follow(id) {
    return instance.post(`follow/${id}`).then(response => {
      return response.data
    })
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response => {
      return response.data
    })
  },

  getProfile(id) {
    return profileAPI.getProfile(id)
  }
}


export const profileAPI = {
  getProfile(id) {
    return instance.get(`profile/${id}`).then(response => {
      return response.data
    })
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`).then(response => {
      return response.data
    })
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status}).then(response => {
      return response.data
    })
  },
}


export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`).then(response => {
      return response.data
    })
  },
}