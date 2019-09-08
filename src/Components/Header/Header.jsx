import React from 'react'
import styleHeader from './Header.module.css'
import {NavLink} from 'react-router-dom'

let Header = (props) => {
   return   <div className={styleHeader.header}>
               <div className={styleHeader.login}>
                  {props.login ? <button onClick={props.logOutTC}>log out {props.login}</button>
                  : <NavLink to='/login' className={styleHeader.link}>Login</NavLink>                  
                  }
                  
               </div>
            </div>
}

export default Header
