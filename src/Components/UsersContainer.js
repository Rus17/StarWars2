import React from 'react'
import Users from "./Users"
import {handlerAddSymbolUser} from "./../redux/usersReducer.js"
import {handlerAddUser} from "./../redux/usersReducer.js"
import StoreContext from "./../StoreContext"


const UsersContainer = () => {
   
   return(
      <StoreContext.Consumer>           
      {                   // Эту фигурную скобку нельзя ставить на одной строке с <StoreContext.Consumer>!!!
         (store) => {
            let users = store.getState().usersPage.users   
            let symbolForValue = store.getState().usersPage.symbolAddUser

                     //Обработчик ввода символа
            const addSymbolUser = (e) => { 
               let action = handlerAddSymbolUser(e.target.value)           // Формируется объект action для dispatch
               store.dispatch(action)                                   // Запускаем dispatch
            }
                     //Обработчик клика по кнопке "Добавить"
            const addProfile = () => {             
               let action = handlerAddUser(store.getState().usersPage.symbolAddUser)         // Формируется объект action для dispatch
               store.dispatch(action)
            }
            return (
            <Users 
               users={users} 
               symbolForValue={symbolForValue}
               addSymbol={addSymbolUser}
               addUser={addProfile}            
         />)}
      }
      </StoreContext.Consumer>
   )      
}
     
export default UsersContainer
