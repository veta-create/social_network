import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import NavbarContainer from './components/Navbar/NavbarContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer /> 
      <div className='app-wrapper-content'>

        <Route path='/dialogs' render={() => <DialogsContainer />} />

        <Route path='/profile' render={() => <Profile />} />

        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>

  );
}


export default App;