import {getInfoMe} from './authReducer'

const AUTH_NOT_AUTH = 'AUTH_NOT_AUTH'

let initialState = {
   authNotAuth: false
}

const appReducer = (state = initialState, action) => {

   switch(action.type){
      case AUTH_NOT_AUTH: {
         return {
            ...state,
            authNotAuth: true
         }
      }
      default: return state
   }
}

//====================== AC ======================
const authNotAuthAC = () => {
   return ({
      type: AUTH_NOT_AUTH
   })
}

//====================== TC ====================== 
export const authNotAuthTC = () => (dispatch) => {
      dispatch(getInfoMe())  
      .then(() => dispatch(authNotAuthAC()))
   }

export default appReducer