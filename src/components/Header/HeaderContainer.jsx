import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { setUserData, getAuthMe, logout } from '../../redux/authReducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthMe()
  }

  render() {
    return (
      <Header auth={this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(mapStateToProps, { setUserData, getAuthMe, logout })(HeaderContainer)