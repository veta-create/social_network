import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        userId: action.userId,
        email: action.email,
        login: action.login,
        isAuth: action.isAuth
      }
    }
    default: return state
  }

}

export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, userId, email, login, isAuth })

export const getAuthMe = () => {
  return (dispatch) => {
    authAPI.getAuthMe().then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserData(data.data.id, data.data.email, data.data.login, true))
      }
    })
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
      if (data.data.resultCode === 0) {
        dispatch(getAuthMe())
      }
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout()
      .then(data => {
        if (data.data.resultCode === 0) {
          dispatch(setUserData(null, null, null, false))
        }
      })
  }

}

export default authReducer