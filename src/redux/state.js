import notesReducer from './notesReducer'
import usersReducer from './usersReducer'

//------Объект для старта приложения---------
let startObj ={
   startdb: {
      usersPage: {
         users: [
         {
            id: 0,
            name: 'Падме Амидала',
            avatar: './img/PA.jpg',
         },
         {
            id: 1,
            name: 'Оби-Ван Кеноби',
            avatar: './img/OVC.jpg',
         },
         {
            id: 2,
            name: 'Магистр Йода',
            avatar: './img/MY.jpg',
         },
         {
            id: 3,
            name: 'Чубака',
            avatar: './img/Ch.jpg',
         },
         {
            id: 4,
            name: 'Люк Скайуокер',
            avatar: './img/LSW.jpg',
         },
      ],
         symbolAddUser: ''
      },
      notesPage: {
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
         filteredNotes: []
      }  
   },

   //-----------Запись startdb в localStorage----------
   writeStorage(){
      let browserDb = JSON.stringify(this.startdb)
      localStorage.setItem("browserDb", browserDb)
   }
}

// Закомментировать после первого запуска приложения
//startObj.writeStorage()


const HANDLER_CLICK = 'HANDLERCLICK'
const HANDLER_TEG = 'HANDLERTAGS'
const HANDLER_RESET = 'RESET'
const HANDLER_SYMBOL_USER = 'HANDLERSYMBOLUSER'
const HANDLER_USER = 'HANDLERUSER'

//------Объект для работы приложения---------
let store = {
   _db: {},
   
   //-----------Чтение БД из localStorage----------
   readStorage(){
      this._db = JSON.parse(localStorage.getItem("browserDb"))
   },

   getDB(){return this._db},

   dispatch(action){
      //-----------Функция добавления новой записи----------
      this._db.notesPage = notesReducer(this._db.notesPage, action)
      
      //-----------Функция добавления нового пользователя ----------
      this._db.usersPage = usersReducer(this._db.usersPage, action)
      
      this.callSubscriber(this)
   },

   //---------Принудительная перерисовка дерева-----------
   callSubscriber () {
      console.log("Заглушка до переопределения")  //Очень замороченный коллбек для избежания замыкания
   },

   //-----------Очень замороченный коллбек для избежания замыкания между index.js и этим файлом
   subscribe(observer){
      this.callSubscriber = observer
   }
}

store.readStorage()
store.filteredNotes = store._db.notesPage.notes

export default store;

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

export let handlerAddSymbolUser = (symbolNik) => ({
   type: HANDLER_SYMBOL_USER,
   symbolNik
})

export let handlerAddUser = (nik) => ({
   type: HANDLER_USER,
   nik
})
