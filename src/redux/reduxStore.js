import {combineReducers, createStore, applyMiddleware} from 'redux'
import notesReducer from "./notesReducer"
import usersReducer from "./usersReducer"
import enemiesReducer from "./enemiesReducer"
import membersReducer from "./membersReducer"
import profileReducer from './profileReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({       // Наш state
   notesPage: notesReducer,
   usersPage: usersReducer,
   enemiesPage: enemiesReducer,
   membersPage: membersReducer,
   profilePage: profileReducer,
   auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
 window.store = store
export default store
