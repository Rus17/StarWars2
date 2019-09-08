import {getMeInformation, loginPost, loginDelete} from '../api/api'
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
      id: null,
      email: null,
      login: null,
      isAuth: false
};

const authReducer = (state = initialState, action) => {

   switch(action.type) {
      case SET_USER_DATA:{
         return {
            ...state,
            ...action.data
         }
      }
      default:
      return state;
   }
}

//====================== AC ======================
export const setUserData = (id, email, login, isAuth) => {
   return ({
      type: SET_USER_DATA,
      data: {id, email, login, isAuth}
   })
}

//====================== TC ====================== 

//----------Проверка залогинен или нет-----------
export const getInfoMe = () => {   
   return (dispatch) => {
      return getMeInformation()
         .then(data => {
            if(data.resultCode === 0){
               dispatch(setUserData(data.data.id, data.data.email, data.data.login, true))
            }
         })
   }
}

//-----------------Залогинивание---------------------
export let loginTC = (email, password, rememberMe) => {   
      return (dispatch) => {      
      loginPost(email, password, rememberMe)
      .then(response => {         
         if(response.data.resultCode === 0) {
            dispatch(getInfoMe())          
         }
         else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit('login', {_error: message}))
         }
      })
   }
}


//-----------------Отлогинивание---------------------
export const logOutTC = () => {
   return (dispatch) => {
      loginDelete()
      .then (response => {
         if(response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false)) 
         }
      })
   }
}



export default authReducer;
