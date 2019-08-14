const HANDLER_SYMBOL_USER = 'HANDLERSYMBOLUSER'
const HANDLER_USER = 'HANDLERUSER'

const usersReducer = (state, action) => {
      
      
      //-----------Функция ввода символа в поле users ----------
      if (action.type === HANDLER_SYMBOL_USER) {         
         state.symbolAddUser = action.symbolNik 
      }
      
      //-----------Функция добавления нового пользователя ----------
      else if (action.type === HANDLER_USER){
         if(action.nik){
            let newUser = {
               id: state.users.length,
               name: action.nik,
               avatar: './img/noAvatar.jpg'
            }
            state.users = state.users.concat(newUser)
            state.symbolAddUser = ''

            localStorage.setItem("browserDb", JSON.stringify(this._db))
         }
      }
   
   return state
}

export default usersReducer