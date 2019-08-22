import React from 'react'
import "./Users.css"

const Users = (props) => {

            //Обработчик ввода символа
   const addSymbol = props.addSymbol       // Запускаем dispatch

            //Обработчик клика по кнопке "Добавить"
   // const addUser = props.addUser

            //Вывод пользователей
   const outputUsers =  props.users.map((item) => {
                           return <div key={item.id}>
                              <img src={item.avatar} alt="Аватарка"/>
                              <b>{item.name}</b>
                              </div>
   })

   return (
      <div className="users">{outputUsers}
      <textarea
         placeholder="Input your name"
         onChange={addSymbol}
         value={props.symbolForValue}>
      </textarea>
      <input type="file"></input><br />
      <button onClick={props.addUser}>Добавить</button>
      </div>
   )
}

export default Users
