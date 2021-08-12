import { usersAPI } from '../api/api'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING'

let initialState = {
  users: [

  ],
  pageSize: 100,
  totalUsersCount: 1000,
  currentPage: 1,
  isFetching: true,
  isFollowing: []
}


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u, followed: false
            }
          }
          return u
        })
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state, isFetching: action.isFetching
      }
    }
    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        isFollowing: action.isFollowing
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter(id => id !== action.userId)
      }
    }
    default: return state
  }

}

export let followSuccess = (userId) => {
  return { type: FOLLOW, userId }
}

export let unfollowSuccess = (userId) => {
  return { type: UNFOLLOW, userId }
}

export let setUsers = (users) => {
  return { type: SET_USERS, users }
}

export let setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage }
}

export let setUsersTotalCount = (totalUsersCount) => {
  return { type: SET_USERS_TOTAL_COUNT, totalUsersCount }
}

export let toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching }
}

export let toggleIsFollowing = (isFollowing, userId) => {
  return { type: TOGGLE_IS_FOLLOWING, isFollowing, userId }
}

export const getUsers = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(pageNumber, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
    })
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    usersAPI.followed(userId).then(res => {
      if (res.data.resultCode === 0) {
        dispatch(followSuccess(userId))
      }
      dispatch(toggleIsFollowing(false, userId))
    })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    usersAPI.unfollowed(userId).then(res => {
      dispatch(toggleIsFollowing(false, userId))
      if (res.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
      }
    })
  }
}

export default usersReducer