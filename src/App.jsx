import React from 'react'
import {compose} from 'redux'
import {connect} from "react-redux"
import {Route, withRouter} from "react-router-dom"

import './App.css'
import Menu from "./Components/Menu"
import {authNotAuthTC} from './redux/appReducer'
import UsersContainer from "./Components/UsersContainer"
import MessagesContainer from "./Components/MessagesContainer"
import EnemiesContainer from "./Components/Dark/EnemiesContainer"
import MembersContainer from "./Components/Members/MembersContainer"
import ProfileContainer from './Components/Profile/ProfileContainer'
import LoginContainer from './Components/Login/LoginContainer'
import HeaderContainer from './Components/Header/HeaderContainer'
import Preloader from './Components/Preloader/Preloader'

class App extends React.Component{   
   
   componentDidMount(props){
      this.props.authNotAuthTC()
   }

   render(props) {
      if(!this.props.init) return <Preloader />     //Чтобы не загружался сайт для незалогиненого пользователя 
      return (                  
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
      )
   }
}

let MapStateToProps = (state) => {
   return {
      init: state.initialization.authNotAuth
   }
}

export default compose(
   withRouter,
   connect(MapStateToProps, {authNotAuthTC}))(App)
