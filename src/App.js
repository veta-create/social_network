import React from 'react';
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

const App = (props) => {
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

  );
}


export default App;