import { combineReducers, createStore } from 'redux'
import profileReducer from '../redux/profileReducer'
import dialogsReducer from '../redux/dialogsReducer'
import navbarReducer from '../redux/navbarReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer
})

let store = createStore(reducers)

export default store