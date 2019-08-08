// Закомментировать после первого запуска приложения
let startdb = {
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
   allTags: ['Lorem', 'DubleLorem']
}
let browserDb = JSON.stringify(startdb)
localStorage.setItem("browserDb", browserDb)

let rerenderEntireTree = () =>{
   console.log("Заглушка до переопределения")  //Очень замороченный коллбек для избежания замыкания
}

export let db = JSON.parse(localStorage.getItem("browserDb"))


//-----------Функция добавления новой записи----------
export const handlerClick = (value, textColor, tegs) => {
   
   let newDate = new Date()
   newDate = newDate.toLocaleString('ru-RU')
   
   let nextNote = {
      myId: db.notes.length,
      mytext: value,
      mydate: newDate,
      myColor: textColor,
      myTags: tegs
   }
      
   // если такой тег уже есть, меняем counter на false
   let counter = true
   for (let value of db.allTags) {
      if (value === tegs) counter = false
   }
   
   // если такого тега нет и он не пустой, то добавляем его в скачанный массив db.allTags
   if (counter === true && tegs !== '') {
//      db.allTags = db.allTags.concat(tegs)
      db.allTags = db.allTags.concat(tegs)      
      localStorage.setItem("browserDb", JSON.stringify(db))
   }
   
    // добавляем в скачанный массив db.notes новый объект nextNote
   db.notes = db.notes.concat(nextNote)
   localStorage.setItem("browserDb", JSON.stringify(db))
   
   filteredNotes = db.notes
   rerenderEntireTree(db)
}

//-----------Функция фильтра статей по тегу----------
export let filteredNotes = db.notes
export function handlerTags(teg) {    
   filteredNotes = db.notes.filter((item) => item.myTags === teg)
   rerenderEntireTree(db)
}

//-----------Функция сброса фильтра ----------
export function reset(){
      filteredNotes = db.notes
      rerenderEntireTree(db)
   }

export function subscribe(observer){      //Очень замороченный коллбек для избежания 
   rerenderEntireTree = observer         //замыкания между index.js и этим файлом
}
