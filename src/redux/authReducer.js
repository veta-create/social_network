import { authAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

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

export const getAuthMe = () => (dispatch) => {
  return authAPI.getAuthMe()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserData(data.data.id, data.data.email, data.data.login, true))
      }
    })
}

export const login = (email, password, rememberMe) => {

  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
      if (data.data.resultCode === 0) {
        console.log(data.data.resultCode)
        dispatch(getAuthMe())
      } else {
        let message = data.data.messages[0].length > 0 ? data.data.messages[0] : 'Some error'

        dispatch(stopSubmit('login', { _error: message }))
      }
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    return authAPI.logout()
      .then(data => {
        if (data.data.resultCode === 0) {
          dispatch(setUserData(null, null, null, false))
        }
      })
  }

}

export default authReducer