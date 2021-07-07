import React from 'react'
import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC } from '../../redux/usersReducer'
import Users from './Users'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      let action = followAC(userId)
      dispatch(action)
    },
    unfollow: (userId) => {
      let action = unfollowAC(userId)
      dispatch(action)
    },
    setUsers: (users) => {
      let action = setUsersAC(users)
      dispatch(action)
    },
    setCurrentPage: (currentPage) => {
      let action = setCurrentPageAC(currentPage)
      dispatch(action)
    },
    setUsersTotalCount: (totalUsersCount) => {
      let action = setUsersTotalCountAC(totalUsersCount)
      dispatch(action)
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer