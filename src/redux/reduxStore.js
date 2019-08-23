import {combineReducers, createStore} from 'redux'
import notesReducer from "./notesReducer"
import usersReducer from "./usersReducer"
import enemiesReducer from "./enemiesReducer"
import membersFromDimichReducer from "./membersFromDimichReducer"

let reducers = combineReducers({       // Наш state
   notesPage: notesReducer,
   usersPage: usersReducer,
   enemiesPage: enemiesReducer,
   membersPage: membersFromDimichReducer
})

let store = createStore(reducers)
export default store
