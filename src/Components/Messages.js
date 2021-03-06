import React from 'react'
import Textarea from "./Textarea"
import Articles from "./Articles"
import './Messages.css'
import CompTags from "./CompTags"
import {handlerResetActionCreator} from "./../redux/notesReducer.js"


const Messages = (props) => {

   let handlerReset = () => {
      let action = handlerResetActionCreator()
      props.dispatch(action)
   }

   let outputTegs = props.tegs.map((item) => {
               if (item.myTags !== '')
                  return (
                     <CompTags
                        tag = {item}
                        key = {item}
                        dispatch = {props.dispatch}
                     />
                  )
            })

   let listNotes = props.filteredNotes.map((el) => {
               return <Articles
                  key = {el.myId}
                  note1 = {el.mytext}
                  note2 = {el.mydate}
                  note3 = {el.myColor}
               />
            })



   return (

      <div className = "messages" >

         {/*-----------Поле ввода--------------- */}
         <Textarea dispatch = {props.dispatch}/>

         {/*---------------Cписок тегов---------------*/}
         <div className="compTags"> Теги заметок: {outputTegs} </div>

         {/*---------------Кнопка сброса---------------*/}
         <div className="buttunShowAll">
            <button onClick={handlerReset}>Отобразить все</button>
         </div>

         {/*---------------Cписок статей---------------*/}
         <div>{listNotes}</div>
      </div>
   )
}

export default Messages
