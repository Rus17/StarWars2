import {combineReducers, createStore} from 'redux'
import notesReducer from "./notesReducer"
import usersReducer from "./usersReducer"
import enemiesReducer from "./enemiesReducer"
import usersFromDimichReducer from "./usersFromDimichReducer"

let reducers = combineReducers({       // Наш state
   notesPage: notesReducer,
   usersPage: usersReducer,
   enemiesPage: enemiesReducer,
   dimichPage: usersFromDimichReducer
})

let store = createStore(reducers)
export default store
