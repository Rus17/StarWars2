import React from 'react'
import './Menu.css'
import {NavLink} from "react-router-dom"

const Menu = () => {
   return (
      <div className="menu">
         <NavLink to="/profile">Мой профиль</NavLink><br />        
         <NavLink to="/showUsers">Пользователи</NavLink><br />
         <NavLink to="/showMessages">Сообщения</NavLink><br />
         <NavLink to="/dark">Темная сторона</NavLink><br />
         <NavLink to="/membersFromDimich">Димыча</NavLink><br />
      </div>
   )
}

export default Menu
