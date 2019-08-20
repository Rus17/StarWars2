import React from 'react'
import './App.css'
import UsersContainer from "./Components/UsersContainer"
import MessagesContainer from "./Components/MessagesContainer"
import EnemiesContainer from "./Components/Dark/EnemiesContainer"
import Menu from "./Components/Menu"
import {BrowserRouter, Route} from "react-router-dom"
import {Provider} from "react-redux"


const App = (props) => {

   return (
      <BrowserRouter>
      <Provider store={props.store}>
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
                        
                  <Route 
                     path="/dark" 
                     render={() => <EnemiesContainer />
                     }
                  />
               </div>
            </div>
         </div>
   </Provider>
      </BrowserRouter>
   )
}

export default App
