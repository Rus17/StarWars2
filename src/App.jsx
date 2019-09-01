import React from 'react'
import './App.css'
import UsersContainer from "./Components/UsersContainer"
import MessagesContainer from "./Components/MessagesContainer"
import EnemiesContainer from "./Components/Dark/EnemiesContainer"
import MembersContainer from "./Components/Members/MembersContainer"
import ProfileContainer from './Components/Profile/ProfileContainer'
import LoginContainer from './Components/Login/Login'
import Menu from "./Components/Menu"
import {BrowserRouter, Route} from "react-router-dom"
import {Provider} from "react-redux"
import HeaderContainer from './Components/Header/HeaderContainer'


const App = (props) => {

   return (
      <BrowserRouter>
      <Provider store={props.store}>
         <div className = "app" >
            <HeaderContainer />
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

                  <Route
                     path="/membersFromDimich"
                     render={() => <MembersContainer />
                     }
                  />
                  <Route
                     path="/profile/:userId?"
                     render={() => <ProfileContainer />
                     }
                  />
                  <Route
                     path="/login"
                     render={() => <LoginContainer />
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
