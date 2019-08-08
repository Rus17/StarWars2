import {db} from "./state"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {handlerClick} from "./state"
import {handlerTags} from "./state"
import {filteredNotes} from "./state"
import {reset} from "./state"
import {subscribe} from "./state"

let rerenderEntireTree = (db) => {
   ReactDOM.render(<App 
                   db={db}
                   handlerClick={handlerClick}
                   handlerTags={handlerTags}
                   filteredNotes={filteredNotes}
                   reset={reset}
                   />, document.querySelector('#root'))
}

rerenderEntireTree(db)
subscribe(rerenderEntireTree)          //Очень замороченный коллбек для избежания замыкания