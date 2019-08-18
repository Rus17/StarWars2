const HANDLER_CLICK = 'HANDLERCLICK'
const HANDLER_TEG = 'HANDLERTAGS'
const HANDLER_RESET = 'RESET'
//------------------Начальные значения State------------------
let initialState = {
   notes: [
   {
      myId: 0,
      userName: 'Падме Амидала',
      mytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque incidunt illum repellendus eaque quos odio corporis, debitis quaerat commodi dolore pariatur aut odit magni minus. Vitae eius repellendus nostrum a dolorum, mollitia nesciunt laboriosam corrupti, exercitationem ipsam velit excepturi, quidem enim laborum repellat eos, sint ea reprehenderit consequuntur doloribus?',
      mydate: '06.08.2019, 03:42:32',
      myColor: "yellow",
      myTags: 'Lorem'
   },
   {
      myId: 1,
      userName: 'Люк Скайуокер',
      mytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, error quaerat, ab tenetur officia sunt sed dolore similique voluptate! Harum esse, cumque minus voluptates a accusantium. Consequuntur ipsa quos asperiores.',
      mydate: '06.08.2019, 03:42:32',
      myColor: "orange",
      myTags: 'Lorem'
   },
   {
      myId: 2,
      userName: 'Чубака',
      mytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel molestiae voluptas, quos tempore illo quo qui exercitationem nulla in repudiandae, nam ea. Nam repudiandae delectus quidem aperiam illum consectetur dolores velit libero assumenda perspiciatis, sapiente adipisci reiciendis sint quas ullam.',
      mydate: '06.08.2019, 03:42:32',
      myColor: "gray",
      myTags: 'Lorem'
   },
   {
      myId: 3,
      userName: 'Магистр Йода',
      mytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, error quaerat, ab tenetur officia sunt sed dolore similique voluptate! Harum esse, cumque minus voluptates a accusantium. Consequuntur ipsa quos asperiores.',
      mydate: '06.08.2019, 03:42:32',
      myColor: "orange",
      myTags: 'DubleLorem'
   },
   {
      myId: 4,
      userName: 'Оби-Ван Кеноби',
      mytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel molestiae voluptas, quos tempore illo quo qui exercitationem nulla in repudiandae, nam ea. Nam repudiandae delectus quidem aperiam illum consectetur dolores velit libero assumenda perspiciatis, sapiente adipisci reiciendis sint quas ullam.',
      mydate: '06.08.2019, 03:42:32',
      myColor: "gray",
      myTags: 'DubleLorem'
   },
],
   allTags: ['Lorem', 'DubleLorem'],
   filteredNotes: [
   {
      myId: 0,
      userName: 'Падме Амидала',
      mytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque incidunt illum repellendus eaque quos odio corporis, debitis quaerat commodi dolore pariatur aut odit magni minus. Vitae eius repellendus nostrum a dolorum, mollitia nesciunt laboriosam corrupti, exercitationem ipsam velit excepturi, quidem enim laborum repellat eos, sint ea reprehenderit consequuntur doloribus?',
      mydate: '06.08.2019, 03:42:32',
      myColor: "yellow",
      myTags: 'Lorem'
   },
   {
      myId: 1,
      userName: 'Люк Скайуокер',
      mytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, error quaerat, ab tenetur officia sunt sed dolore similique voluptate! Harum esse, cumque minus voluptates a accusantium. Consequuntur ipsa quos asperiores.',
      mydate: '06.08.2019, 03:42:32',
      myColor: "orange",
      myTags: 'Lorem'
   },
   {
      myId: 2,
      userName: 'Чубака',
      mytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel molestiae voluptas, quos tempore illo quo qui exercitationem nulla in repudiandae, nam ea. Nam repudiandae delectus quidem aperiam illum consectetur dolores velit libero assumenda perspiciatis, sapiente adipisci reiciendis sint quas ullam.',
      mydate: '06.08.2019, 03:42:32',
      myColor: "gray",
      myTags: 'Lorem'
   },
   {
      myId: 3,
      userName: 'Магистр Йода',
      mytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, error quaerat, ab tenetur officia sunt sed dolore similique voluptate! Harum esse, cumque minus voluptates a accusantium. Consequuntur ipsa quos asperiores.',
      mydate: '06.08.2019, 03:42:32',
      myColor: "orange",
      myTags: 'DubleLorem'
   },
   {
      myId: 4,
      userName: 'Оби-Ван Кеноби',
      mytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel molestiae voluptas, quos tempore illo quo qui exercitationem nulla in repudiandae, nam ea. Nam repudiandae delectus quidem aperiam illum consectetur dolores velit libero assumenda perspiciatis, sapiente adipisci reiciendis sint quas ullam.',
      mydate: '06.08.2019, 03:42:32',
      myColor: "gray",
      myTags: 'DubleLorem'
   },
]
}

const notesReducer = (state = initialState, action) => {

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
