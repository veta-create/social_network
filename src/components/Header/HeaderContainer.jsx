import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { setUserData, logout } from '../../redux/authReducer'

class HeaderContainer extends React.Component {

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

export default connect(mapStateToProps, { setUserData, logout })(HeaderContainer)