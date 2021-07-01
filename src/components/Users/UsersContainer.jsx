import React from 'react'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer'
import Users from './Users'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
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
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer