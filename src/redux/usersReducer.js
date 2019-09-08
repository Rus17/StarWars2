const HANDLER_USER = 'HANDLERUSER'

//------------------Начальные значения State------------------
let initialState = {
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
]
}

const usersReducer = (state = initialState, action) => {

   switch (action.type) {
            
      //-----------Функция добавления нового пользователя ----------
      case HANDLER_USER:                               
            let newUser = {
               id: state.users.length,
               name: action.name,
               avatar: './img/noAvatar.jpg'
            }  
            return {
            ...state,
            users: state.users.concat(newUser),
            symbolAddUser: '' 
            }
         
      default: return state
   }
}

export default usersReducer

export let handlerAddUser = (name) => ({         // Формируется объект action для dispatch
   type: HANDLER_USER,
   name: name
})
