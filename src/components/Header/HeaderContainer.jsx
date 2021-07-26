import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { setUserData } from '../../redux/authReducer'
import { usersAPI } from '../../api/api'

class HeaderContainer extends React.Component {

  componentDidMount() {
    usersAPI.getAuthMe().then(data => {
      this.props.setUserData(data.data.id, data.data.email, data.data.login)
    })
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
    login: state.auth.login
  }
}

export default connect(mapStateToProps, { setUserData })(HeaderContainer)