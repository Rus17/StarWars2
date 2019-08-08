import React from 'react'
import Textarea from "./Textarea"
import Articles from "./Articles"
import './Messages.css'
import CompTags from "./CompTags"

const Messages = (props) => { 
   return (
      <div className = "messages" >

         {/*-----------Поле ввода--------------- */}
         <Textarea handlerClick = {props.handlerClick}/>
      

         {/*---------------Cписок тегов---------------*/}
         <div className="compTags"> Теги заметок: {
            props.db.allTags.map((item) => {
               if (item.myTags !== '')
                  return (                     
                     <CompTags 
                     tag = {item}
                     key = {item}
                     handlerTags = {props.handlerTags}
                     />                      
                  )
            })
         } </div>


         {/*---------------Кнопка сброса---------------*/}
         <div className="buttunShowAll">
            <button onClick={props.reset}>Отобразить все
            </button>
         </div>


         {/*---------------Cписок статей---------------*/}
         <div>{
            props.filteredNotes.map((el) => {
               return <Articles
                  key = {el.myId}
                  note1 = {el.mytext}
                  note2 = {el.mydate}
                  note3 = {el.myColor}
               />
            })
         } </div>
      </div>
   )
}

export default Messages
