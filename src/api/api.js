import axios from "axios"

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'c2ed8a6e-465e-49f7-9ab6-9713c4d23dcb'
  }
}
)

export const usersAPI = {
  getUsers (pageNumber, pageSize) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(res => res.data)
  },

  unfollowed (userId) {
    return instance.delete(`follow/${userId}`)
  },

  followed (userId) {
    return instance.post(`follow/${userId}`, {})
  },

  getUserProfile (userId) {
    return instance.get(`profile/${userId}`)
  }
}

export const authAPI = {
  getAuthMe () {
    return instance.get('auth/me').then(res => res.data)
  }
}
