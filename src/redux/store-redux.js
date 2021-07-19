import { combineReducers, createStore } from 'redux'
import profileReducer from '../redux/profileReducer'
import dialogsReducer from '../redux/dialogsReducer'
import navbarReducer from '../redux/navbarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer
})

let store = createStore(reducers)

window.store = store

export default store