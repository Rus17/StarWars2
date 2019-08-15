const HANDLER_CLICK = 'HANDLERCLICK'
const HANDLER_TEG = 'HANDLERTAGS'
const HANDLER_RESET = 'RESET'

const notesReducer = (state, action) => {
   switch (action.type) {
      //-----------Функция добавления новой записи----------
   case HANDLER_CLICK: {
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
      }

       // добавляем в скачанный массив db.notes новый объект nextNote
      state.notes = state.notes.concat(nextNote)

      state.filteredNotes = state.notes
   };
   return state;
      //-----------Функция фильтра статей по тегу----------
   case HANDLER_TEG:state.filteredNotes = state.notes.filter(
            (item) => item.myTags === action.teg);
   return state;
      //-----------Функция сброса фильтра ----------
   case HANDLER_RESET: state.filteredNotes = state.notes;
   return state;
   default:return state
   }
}

export default notesReducer

export let handlerClickActionCreator = (text, color, teg) => ({
   type: HANDLER_CLICK,
   text,
   color,
   teg
})

export let handlerTegActionCreator = (teg) => ({
   type: HANDLER_TEG,
   teg
})

export let handlerResetActionCreator = () =>({type: HANDLER_RESET})
