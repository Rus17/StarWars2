import React from 'react'
import "./Users.css"

const Users = (props) => {
   return <div className="users">{   
      props.db.users.map((item) => {
         return <div key={item.id}>
            <img src={item.avatar} alt="Аватарка"/>
            <b>{item.name}</b>
            </div>
      })
   }</div>   
}

export default Users