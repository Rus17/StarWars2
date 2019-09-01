import React from 'react'
import styleHeader from './Header.module.css'
import {NavLink} from 'react-router-dom'

let Header = (props) => {
   return   <div className={styleHeader.header}>
               <div className={styleHeader.login}>
                  <NavLink to='/login' className={styleHeader.link}>{props.login ? props.login : 'Login'}</NavLink>
                  <p >{props.id}</p>
                  <p >{props.email}</p>
               </div>
            </div>
}

export default Header
