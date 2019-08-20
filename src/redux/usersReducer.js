const HANDLER_SYMBOL_USER = 'HANDLERSYMBOLUSER'
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
],
   symbolAddUser: ''
}

const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      //-----------Функция ввода символа в поле users ----------
      case HANDLER_SYMBOL_USER: 
         return {
            ...state,
            symbolAddUser: action.symbolNik
         }
      
      //-----------Функция добавления нового пользователя ----------
      case HANDLER_USER:
         if(state.symbolAddUser){                        
            let newUser = {
               id: state.users.length,
               name: state.symbolAddUser,
               avatar: './img/noAvatar.jpg'
            }  
            return {
            ...state,
            users: state.users.concat(newUser),
            symbolAddUser: '' 
            }
         }
      default: return state
   }
}

export default usersReducer

export let handlerAddSymbolUser = (symbolNik) => ({         // Формируется объект action для dispatch
   type: HANDLER_SYMBOL_USER,
   symbolNik
})

export let handlerAddUser = () => ({         // Формируется объект action для dispatch
   type: HANDLER_USER   
})
