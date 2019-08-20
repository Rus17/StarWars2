import store from "./redux/reduxStore.js"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App store={store}/>, document.querySelector('#root'))
