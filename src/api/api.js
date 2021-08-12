import axios from "axios"

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '77ba6a83-c988-4856-b96f-dd8fe80b0a40'
  }
}
)

export const usersAPI = {
  getUsers (pageNumber, pageSize) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(res => res.data)
  },
  getAuthMe () {
    return instance.get('auth/me').then(res => res.data)
  }, 
  unfollowed (userId) {
    return instance.delete(`follow/${userId}`,)
  },

  followed (userId) {
    return instance.post(`follow/${userId}`, {})
  }
}
