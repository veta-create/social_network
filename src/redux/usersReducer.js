const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
  users: [

  ],
  pageSize: 100,
  totalUsersCount: 1000,
  currentPage: 1,
  isFetching: true
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
    default: return state
  }

}

export let followAC = (userId) => {
  return { type: FOLLOW, userId }
}

export let unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId }
}

export let setUsersAC = (users) => {
  return { type: SET_USERS, users }
}

export let setCurrentPageAC = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage }
}

export let setUsersTotalCountAC = (totalUsersCount) => {
  return { type: SET_USERS_TOTAL_COUNT, totalUsersCount }
}

export let toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching}
}

export default usersReducer