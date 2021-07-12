import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, toggleIsFetching, unfollowAC } from '../../redux/usersReducer'
import Users from './Users'
import s from './Users.module.css'
import preloader from '../../assets/images/preloader.svg'
import Preloader from '../common/Preloader/Preloader'

class UsersAPIContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(res.data.items)
      // this.props.setUsersTotalCount(res.data.totalCount)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(res.data.items)  
    })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged} />
    </>
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
    }, 
    toggleIsFetching: (isFetching) => {
      let action = toggleIsFetching(isFetching)
      dispatch(action)
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer