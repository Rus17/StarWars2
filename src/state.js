//------Объект для старта приложения---------
let startObj ={
   startdb: {
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
      symbolAddUser: ''
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
   filteredNotes: [],
   //-----------Чтение БД из localStorage----------
   readStorage(){
      this._db = JSON.parse(localStorage.getItem("browserDb"))
   },

   getDB(){return this._db},

   dispatch(action){
      //-----------Функция добавления новой записи----------
      if(action.type === HANDLER_CLICK){
         let newDate = new Date()
         newDate = newDate.toLocaleString('ru-RU')

         let nextNote = {
            myId: store._db.notes.length,
            mytext: action.text,
            mydate: newDate,
            myColor: action.color,
            myTags: action.teg
         }

         // если такой тег уже есть, меняем counter на false
         let counter = true
         for (let value of store._db.allTags) {
            if (value === action.teg) counter = false
         }

         // если такого тега нет и он не пустой, то добавляем его в скачанный массив db.allTags
         if (counter === true && action.teg !== '') {
            this._db.allTags = this._db.allTags.concat(action.teg)

            localStorage.setItem("browserDb", JSON.stringify(this._db))
         }

          // добавляем в скачанный массив db.notes новый объект nextNote
         this._db.notes = this._db.notes.concat(nextNote)
         localStorage.setItem("browserDb", JSON.stringify(this._db))

         this.filteredNotes = this._db.notes
         this.callSubscriber(this)
      }

      //-----------Функция фильтра статей по тегу----------
      else if (action.type === HANDLER_TEG){
            this.filteredNotes = this._db.notes.filter(
               (item) => item.myTags === action.teg)
            this.callSubscriber(this)
      }

      //-----------Функция сброса фильтра ----------
      else if (action.type === HANDLER_RESET) {
         this.filteredNotes = this._db.notes
         this.callSubscriber(this)
      }
      
      //-----------Функция ввода символа в поле users ----------
      else if (action.type === HANDLER_SYMBOL_USER) {         
         this._db.symbolAddUser = action.symbolNik         
         this.callSubscriber(this)
      }
      
      //-----------Функция добавления нового пользователя ----------
      else if (action.type === HANDLER_USER){
         if(action.nik){
            let newUser = {
               id: this._db.users.length,
               name: action.nik,
               avatar: './img/noAvatar.jpg'
            }
            this._db.users = this._db.users.concat(newUser)
            this._db.symbolAddUser = ''
            this.callSubscriber(this)

            localStorage.setItem("browserDb", JSON.stringify(this._db))
         }
      }
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
store.filteredNotes = store._db.notes

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
