import React from 'react'
import './App.css'
import UsersContainer from "./Components/UsersContainer"
import MessagesContainer from "./Components/MessagesContainer"
import Menu from "./Components/Menu"
import {BrowserRouter, Route} from "react-router-dom"
import StoreContext from "./StoreContext"

const App = (props) => {

   return (
      <BrowserRouter>
      <StoreContext.Provider value={props.store}>
         <div className = "app" >
            <div className="header">Шапка</div>
            <div className="container">
               <Menu />
               <div className="content">
                  <div><h1>Стартовая страница</h1></div>
                  <Route
                     path="/showMessages"
                     render={()=><MessagesContainer />
                     }
                  />

                  <Route 
                     path="/showUsers" 
                     render={() => <UsersContainer />
                     }
                  />
               </div>
            </div>
         </div>
   </StoreContext.Provider>
      </BrowserRouter>
   )
}

export default App
