import {combineReducers, createStore} from 'redux'
import notesReducer from "./notesReducer"
import usersReducer from "./usersReducer"
import enemiesReducer from "./enemiesReducer"
import membersFromDimichReducer from "./membersFromDimichReducer"
import profileReducer from './profileReducer'

let reducers = combineReducers({       // Наш state
   notesPage: notesReducer,
   usersPage: usersReducer,
   enemiesPage: enemiesReducer,
   membersPage: membersFromDimichReducer,
   profilePage: profileReducer
})

let store = createStore(reducers)
// window.store = store
export default store
