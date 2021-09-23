import {usersAPI, profileAPI} from '../api/api'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS '

let initialState = {
  posts: [
    { id: 1, message: 'Hi, it is my third post', likesCount: 12 },
    { id: 2, message: 'Life is awesome!', likesCount: 0 },
    { id: 3, message: 'I want to sleep', likesCount: 25 }
  ],
  profile: null, 
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 666
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
     }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }

    default:
      return state

  }

}

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText }
}

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile }
}

export const setStatus = (status) => {
  return { type: SET_STATUS, status}
}

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfile(userId).then(res => {
      dispatch(setUserProfile(res.data))
    })
  }
}

 export const getStatus = (userId) => {
   return (dispatch) => {
     profileAPI.getStatus(userId).then(res => {
       dispatch(setStatus(res.data))
     })
   }
 }

 export const updateStatus = (status) => {
   return (dispatch) => {
     profileAPI.updateStatus(status).then(res => {
       if(res.data.resultCode === 0) {
         dispatch(setStatus(status))
       }
     })
   }
 }

export default profileReducer