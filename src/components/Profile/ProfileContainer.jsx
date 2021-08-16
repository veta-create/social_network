import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { withAuthReducer } from '../../hoc/withAuthReducer'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 18055
    }
    this.props.getUserProfile(userId)
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

export default compose( connect(mapStateToProps, {getUserProfile}), withRouter, withAuthReducer)(ProfileContainer)