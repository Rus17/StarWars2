import React from 'react'
import "./Users.css"
import {handlerAddSymbolUser} from "./../state.js"
import {handlerAddUser} from "./../state.js"


const Users = (props) => {
   const addSymbol = (e) => {
      let action = handlerAddSymbolUser(e.target.value)
      props.dispatch(action)
   }

   const addUser = () => {
      let action = handlerAddUser(props.db.symbolAddUser)
      props.dispatch(action)
   }

   return <div className="users">{
      props.db.users.map((item) => {
         return <div key={item.id}>
            <img src={item.avatar} alt="Аватарка"/>
            <b>{item.name}</b>
            </div>
      })}
      <textarea
         // placeholder="Name"
         onChange={addSymbol}
         value={props.db.symbolAddUser}>
      </textarea>
      <input type="file"></input><br />
      <button onClick={addUser}>Добавить</button>
   </div>
}

export default Users
