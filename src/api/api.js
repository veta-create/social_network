import axios from "axios"

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '392ee763-ae50-4bf9-a19d-6013041177a5'
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
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {})
  }
}
