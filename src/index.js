import store from "./redux/store.js"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let rerenderEntireTree = (store) => {

   ReactDOM.render(<App
                   db={store.getDB()}
                   dispatch={store.dispatch.bind(store)}
                   filteredNotes={store.getDB().notesPage.filteredNotes}
                   />, document.querySelector('#root'))
}

rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)          //Очень замороченный коллбек для избежания замыкания
