import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from '../redux/profileReducer'
import dialogsReducer from '../redux/dialogsReducer'
import navbarReducer from '../redux/navbarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store