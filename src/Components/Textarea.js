// Задание 3: Теги для заметок. Уровень сложности: выше среднего
// При создании заметки пользователь может указать список тегов для нее.
// Затем, при нажатии на тег, должны отфильтровываться заметки с данным тегом.
import React from 'react'
import './Textarea.css'
import {handlerClickActionCreator} from './../redux/state.js'

const Textarea = (props) =>{
   let linkTextarea = React.createRef();
   let textColor = React.createRef();
   let tags = React.createRef();
   let addNotes = () =>{
      let action = handlerClickActionCreator(
         linkTextarea.current.value,
         textColor.current.value,
         tags.current.value)
      props.dispatch(action)
   }

   return(
      <div className="textarea">

         <textarea id="txtarea"
            placeholder="Введите вашу заметку"
            cols="110"
            rows="4"
            ref={linkTextarea}>
         </textarea><br />

         Select color
         <input type="color" ref={textColor} />

         Добавьте теги к вашей заметке:
         <input type="text" ref={tags}/><br />

         <button className="bttn" onClick={addNotes}>Добавить
         </button>
         <hr />
      </div>
   )
}

export default Textarea
