import React from 'react'
import Header from './Header'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUserData } from '../../redux/authReducer'

class HeaderContainer extends React.Component {
 
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    }).then(res => {
      this.props.setUserData(res.data.data.id, res.data.data.email, res.data.data.login)
    })
  }

  render() {
    return (
      <Header auth={this.props}/>
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