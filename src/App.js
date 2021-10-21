import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import NavbarContainer from './components/Navbar/NavbarContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Preloader from './components/common/Preloader/Preloader';

class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>

          <Route path='/dialogs' render={() => <DialogsContainer />} />

          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />

          <Route path='/users' render={() => <UsersContainer />} />

          <Route path='/login' render={() => <Login />} />

          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>

    )
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default compose(
   withRouter,
   connect(mapStateToProps, { initializeApp }))(App)