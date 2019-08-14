const HANDLER_CLICK = 'HANDLERCLICK'
const HANDLER_TEG = 'HANDLERTAGS'
const HANDLER_RESET = 'RESET'

const notesReducer = (state, action) => {
   
   //-----------Функция добавления новой записи----------
      if(action.type === HANDLER_CLICK){
         let newDate = new Date()
         newDate = newDate.toLocaleString('ru-RU')

         let nextNote = {
            myId: state.notes.length,
            mytext: action.text,
            mydate: newDate,
            myColor: action.color,
            myTags: action.teg
         }

         // если такой тег уже есть, меняем counter на false
         let counter = true
         for (let value of state.allTags) {
            if (value === action.teg) counter = false
         }

         // если такого тега нет и он не пустой, то добавляем его в скачанный массив db.allTags
         if (counter === true && action.teg !== '') {
            state.allTags = state.allTags.concat(action.teg)
            
            
            

            localStorage.setItem("browserDb", JSON.stringify(this._db))  // В сторедж нужно записать всю базу, а не только пришедший в state кусочек. ?????????????
         }

          // добавляем в скачанный массив db.notes новый объект nextNote
         state.notes = state.notes.concat(nextNote)
         localStorage.setItem("browserDb", JSON.stringify(this._db)) // В сторедж нужно записать всю базу, а не только пришедший в state кусочек. ?????????????
         
         state.filteredNotes = state.notes         
      }
   
   

      //-----------Функция фильтра статей по тегу----------
      else if (action.type === HANDLER_TEG){
            state.filteredNotes = state.notes.filter(
               (item) => item.myTags === action.teg)            
      }

      //-----------Функция сброса фильтра ----------
      else if (action.type === HANDLER_RESET) {
         this.filteredNotes = this._db.notesPage.notes         
      }
   
   return state      
}

export default notesReducer