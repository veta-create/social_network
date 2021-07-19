import React from 'react';
import s from './Profile.module.css'
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId) {
      userId = 18055
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => {
      this.props.setUserProfile(res.data)
    })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
  }
)

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)