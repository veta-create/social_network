import { combineReducers, createStore } from 'redux'
import profileReducer from '../redux/profileReducer'
import dialogsReducer from '../redux/dialogsReducer'
import navbarReducer from '../redux/navbarReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer
})

let store = createStore(reducers)

export default store