import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from '../redux/profileReducer'
import dialogsReducer from '../redux/dialogsReducer'
import navbarReducer from '../redux/navbarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer} from 'redux-form'
import appReducer from './appReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store