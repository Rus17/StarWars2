import React from 'react'
import "./Users.css"
import {Field, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from './../validators/validators'
import {TextArea} from './FormsControl/FormsControl'

let maxLength = maxLengthCreator(10)

const UserSubmit = (props) => {
   return (      
      <form onSubmit={props.handleSubmit}>
         <Field
            name="name"
            placeholder="Input your name"            
            component={TextArea}
            validate={[required, maxLength]}>
         </Field>
         <button>Добавить</button>
      </form>
      )
}

let ReduxUserSubmit = reduxForm({form: 'name'})(UserSubmit)



const Users = (props) => {


   //Обработчик клика по кнопке "Добавить"
   // const addUser = props.addUser

   //Вывод пользователей
   const outputUsers =  props.users.map((item) => {
      return <div key={item.id}>
         <img src={item.avatar} alt="Аватарка"/>
         <b>{item.name}</b>
      </div>
   })
   
   const onSubmit = (formData) => {
      props.addUser(formData.name)
   }
   
   return (<>
     <div className="users">{outputUsers}</div>
         {/* <textarea
            placeholder="Input your name"
            onChange={addSymbol}
            value={props.symbolForValue}>
         </textarea>
         <input type="file"></input><br />
         <button onClick={props.addUser}>Добавить</button>
      */}
      <h3>Форма с отправкой на сервер</h3>
      <ReduxUserSubmit onSubmit={onSubmit}/>
      </>
   )
}

export default Users
