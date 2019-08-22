import React from 'react'
import './Menu.css'
import {NavLink} from "react-router-dom"

const Menu = () => {
   return (
      <div className="menu">
         <NavLink to="/showUsers">Пользователи</NavLink><br />
         <NavLink to="/showMessages">Сообщения</NavLink><br />
         <NavLink to="/dark">Темная сторона</NavLink><br />
         <NavLink to="/usersFromDimich">Темная сторона</NavLink><br />
      </div>
   )
}

export default Menu
