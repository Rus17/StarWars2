import store from "./redux/reduxStore.js"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"

// setInterval(() => {store.dispatch({type: "Fake"})}, 1000)

ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>, document.querySelector('#root'))
