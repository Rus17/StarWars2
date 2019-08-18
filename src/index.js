import store from "./redux/reduxStore.js"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


let rerenderEntireTree = (state) => {

   ReactDOM.render(<App
                   store={store}
                   />, document.querySelector('#root'))
}

rerenderEntireTree(store.getState())
store.subscribe(() => {    //Почему не просто store.subscribe(rerenderEntireTree)
   rerenderEntireTree(store.getState())
})
