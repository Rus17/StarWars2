import React from 'react'
import Textarea from "./Components/Textarea"
import Articles from "./Components/Articles"
import './App.css'
import CompTags from "./Components/CompTags"

const App = (props) => { 
   return (
      <div className = "app" >

         {/*-----------Поле ввода--------------- */}
         <Textarea handlerClick = {props.handlerClick}/>
      

         {/*---------------Cписок тегов---------------*/}
         <div> Теги заметок: {
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
         <button onClick={props.reset}>Отобразить все
         </button>


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

export default App
