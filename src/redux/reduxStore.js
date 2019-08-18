import {combineReducers, createStore} from 'redux'
import notesReducer from "./notesReducer"
import usersReducer from "./usersReducer"

let reducers = combineReducers({       // Наш state
   notesPage: notesReducer,
   usersPage: usersReducer
})

let store = createStore(reducers)
export default store
