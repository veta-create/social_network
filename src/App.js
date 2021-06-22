import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.navbar} />
      <div className='app-wrapper-content'>

        <Route path='/dialogs' render={() => <Dialogs
          store={props.store} dispatch={props.store.dispatch.bind(props.store)}/>} />

        <Route path='/profile' render={() => <Profile
          profilePage={props.state.profilePage} dispatch={props.store.dispatch.bind(props.store)} />} />

        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>

  );
}


export default App;