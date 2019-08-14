import React from 'react'
import "./Users.css"
import {handlerAddSymbolUser} from "./../redux/state.js"
import {handlerAddUser} from "./../redux/state.js"


const Users = (props) => {
   const addSymbol = (e) => {
      let action = handlerAddSymbolUser(e.target.value)
      props.dispatch(action)
   }

   const addUser = () => {
      let action = handlerAddUser(props.db.usersPage.symbolAddUser)
      props.dispatch(action)
   }

   return <div className="users">{
      props.db.usersPage.users.map((item) => {
         return <div key={item.id}>
            <img src={item.avatar} alt="Аватарка"/>
            <b>{item.name}</b>
            </div>
      })}
      <textarea
         // placeholder="Name"
         onChange={addSymbol}
         value={props.db.usersPage.symbolAddUser}>
      </textarea>
      <input type="file"></input><br />
      <button onClick={addUser}>Добавить</button>
   </div>
}

export default Users
