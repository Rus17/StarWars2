import {combineReducers, createStore, applyMiddleware} from 'redux'
import notesReducer from "./notesReducer"
import usersReducer from "./usersReducer"
import enemiesReducer from "./enemiesReducer"
import membersReducer from "./membersReducer"
import profileReducer from './profileReducer'
import authReducer from './authReducer'
import appReducer from './appReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({       // Наш state
   notesPage: notesReducer,
   usersPage: usersReducer,
   enemiesPage: enemiesReducer,
   membersPage: membersReducer,
   profilePage: profileReducer,
   auth: authReducer,
   form: formReducer,
   initialization: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
 window.store = store
export default store
