// Задание 3: Теги для заметок. Уровень сложности: выше среднего
// При создании заметки пользователь может указать список тегов для нее. 
// Затем, при нажатии на тег, должны отфильтровываться заметки с данным тегом.
import React from 'react'
//import React, {Component} from 'react';
import './Textarea.css'

const Textarea = (props) =>{

   let linkTextarea = React.createRef();
   let textColor = React.createRef();
   let tags = React.createRef();  

   return(
      <div className="textarea">

      <textarea id="txtarea" 
         placeholder="Введите вашу заметку" 
         cols="110" 
         rows="4" 
         ref={linkTextarea}>
      </textarea><br />

      Select color 
      <input type="color" ref={textColor} /> <br />

      Добавьте теги к вашей заметке:
      <input type="text" ref={tags}/><br />

      <button className="bttn" onClick={
         () => {props.handlerClick(
            linkTextarea.current.value, 
            textColor.current.value,
            tags.current.value)
                
         }
         }>Добавить
      </button>
      </div>
   )        
}

export default Textarea