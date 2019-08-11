import store from "./state"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let rerenderEntireTree = (store) => {

   ReactDOM.render(<App
                   db={store.getDB()}                   
                   dispatch={store.dispatch.bind(store)}
                   filteredNotes={store.filteredNotes}
                   />, document.querySelector('#root'))
}

rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)          //Очень замороченный коллбек для избежания замыкания
