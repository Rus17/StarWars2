import store from "./state"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let rerenderEntireTree = (db) => {
   ReactDOM.render(<App 
                   db={db}
                   handlerClick={db.handlerClick}
                   handlerTags={db.handlerTags}
                   filteredNotes={db.filteredNotes}
                   reset={db.reset}
                   />, document.querySelector('#root'))
}
store.writeStorage()
rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)          //Очень замороченный коллбек для избежания замыкания