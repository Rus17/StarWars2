import store from "./state"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

let rerenderEntireTree = (store) => {
   
   ReactDOM.render(<App 
                   db={store.getDB()}
                   handlerClick={store.handlerClick.bind(store)}
                   handlerTags={store.handlerTags.bind(store)}
                   filteredNotes={store.filteredNotes}
                   reset={store.reset.bind(store)}
                   />, document.querySelector('#root'))
}

rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)          //Очень замороченный коллбек для избежания замыкания