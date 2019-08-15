const HANDLER_SYMBOL_USER = 'HANDLERSYMBOLUSER'
const HANDLER_USER = 'HANDLERUSER'

const usersReducer = (state, action) => {

   switch (action.type) {
      //-----------Функция ввода символа в поле users ----------
      case HANDLER_SYMBOL_USER:state.symbolAddUser = action.symbolNik;
      return state;
      //-----------Функция добавления нового пользователя ----------
      case HANDLER_USER:if(action.nik){
            let newUser = {
               id: state.users.length,
               name: action.nik,
               avatar: './img/noAvatar.jpg'
            }
            state.users = state.users.concat(newUser)
            state.symbolAddUser = ''
         }
      return state;
      default: return state
   }
}

export default usersReducer

export let handlerAddSymbolUser = (symbolNik) => ({
   type: HANDLER_SYMBOL_USER,
   symbolNik
})

export let handlerAddUser = (nik) => ({
   type: HANDLER_USER,
   nik
})
