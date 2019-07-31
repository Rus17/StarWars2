import React from 'react'
import Textarea from "./Components/Textarea"
import Articles from "./Components/Articles"
import './App.css'
import CompTags from "./Components/CompTags"
import {BrowserRouter, Route} from 'react-router-dom'
import SearchList from "./Components/SearchList"



class App extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         notes: [{
            myId: 0,
            mytext: '',
            mydate: new Date(),
            myColor: "white",
            myTags: ''
         }],
         allTags: []
      }
      this.handlerTags = this.handlerTags.bind(this)
      // this.existsTeg = this.existsTeg.bind(this)


      // console.log(this.state.notes)
   }

   handlerTags(teg) {


      console.log("НЕ Фильтрованный", this.state.notes)
      console.log("Тег", teg)
      let filteredNotes = this.state.notes.filter((item) => item.myTags === teg)
      console.log("Фильтрованный", filteredNotes)
   }

   //    existsTeg(teg){
   //
   //       let сounter = 0
   //       this.state.notes.map((item) => {
   //          if(teg === item.myTags) сounter++})
   //          console.log(`Счетчик по тегу ${teg} равен ${сounter}`)
   //          // console.log("Фильтруем по этому тегу:", teg)
   //          // console.log("Сравниваем c: ", item.myTags)
   //          // return item.myTags === teg})
   //          if (сounter === 1) return true
   // }


   render() {
      // console.log(this.state.notes)
      return (<BrowserRouter>
         <div className = "app" >

         {/*-----------Поле ввода--------------- */}
         <Textarea handlerClick = {
            this.handlerClick
         }/>

         {/*---------------Cписок тегов---------------*/}
         <div> Теги заметок: {
            this.state.allTags.map((item) => {
               if (item.myTags !== '')
               // console.log("Возврат: ", this.existsTeg(item.myTags))
               return <CompTags
               tag = {item}
               key = {item}
               handlerTags = {this.handlerTags}
               />
            })
         } </div>

         {/*--------------- Результаты поиска---------------*/}
         <Route path='/search' component={SearchList} />

         {/*---------------Cписок статей---------------*/}
         <div>{
            this.state.notes.map((el) => {
               return <Articles
               key = {el.myId}
               note1 = {el.mytext}
               note2 = {el.mydate.toLocaleTimeString()}
               note3 = {el.myColor}
               />
            })
         } </div>


      </div></BrowserRouter>)
   }

componentDidUpdate() {
   console.log("Массив тегов = ", this.state.allTags)
   //    let filtered = this.state.notes.filter((item) => {return item.myTags !== ''})
   //    console.log("Фильтрованный", filtered)
}

handlerClick = (value, textColor, tegs) => {
   //        console.log('Вы ввели', value)
   //        let id = this.state.notes.length
   let nextNote = {
      myId: this.state.notes.length,
      mytext: value,
      mydate: new Date(),
      myColor: textColor,
      myTags: tegs
   }
   this.setState({
      notes: this.state.notes.concat(nextNote)
   });
   // this.state.allTags.forEach((item) => {if(item.)
   let counter = true
   for (let value of this.state.allTags) {
      if (value === tegs) counter = false
   }
   if (counter === true && tegs !== '') {
      this.setState({
         allTags: this.state.allTags.concat(tegs)
      })
   }
}

searchTags() {

}
}

export default App
