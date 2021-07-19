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
        isAuth: true
      }
    }
    default: return state
  }

}

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, userId, email, login})


export default authReducer