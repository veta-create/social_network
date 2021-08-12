import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, unfollow, toggleIsFollowing, getUsers } from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersAPIContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.pageSize)
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
        onPageChanged={this.onPageChanged}
        toggleIsFollowing={this.props.toggleIsFollowing}
        isFollowing={this.props.isFollowing} />
    </>
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing
  }
}

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowing,
  getUsers
})(UsersAPIContainer)

export default UsersContainer