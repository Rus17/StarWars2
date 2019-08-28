import React from 'react'
import styleHeader from './Header.module.css'
import {NavLink} from 'react-router-dom'

let Header = (props) => {
   return   <div className={styleHeader.header}>
               <div>
                  <NavLink to='/login' className={styleHeader.login}>{props.login ? props.login : 'Login'}</NavLink>
               </div>
            </div>  
}

export default Header