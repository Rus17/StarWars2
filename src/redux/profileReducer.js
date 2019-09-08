import {getUserInformation, getUserStatus, setStatus} from '../api/api'

const SET_MEMBERS_PROFILE = 'SET_MEMBERS_PROFILE'
const SET_MEMBERS_STATUS = 'SET_MEMBERS_STATUS'

let initialState = {
   profile: null,
   status: ''
};

const profileReducer = (state = initialState, action) => {

   switch(action.type) {
      case SET_MEMBERS_PROFILE:{
         return {
            ...state,
            profile: action.profile
         }
      }
         
        case SET_MEMBERS_STATUS:{
         return {
            ...state,
            status: action.status
         }
      }
      default:
      return state;
   }
}


// ----------------- AC -----------------
export const setMemberProfile = (profile) => {
   return ({
      type: SET_MEMBERS_PROFILE,
      profile
   })
}

// ----------------- Статус -----------------
export const setMemberStatus = (status) => {
   return ({
      type: SET_MEMBERS_STATUS,
      status
   })
}




// ---------------------------------- TC ---------------------------------------------------

// ------------ Запрос для подробной информации о пользователе ---------
export const getInfoMemberTC = (id) => {
   return (dispatch) =>{
      let userId = id
//      if(!userId) userId = 1496
      getUserInformation(userId)
      .then(data => {
         dispatch(setMemberProfile(data))
      })
   }
}

// ---------------- Запрос для получения статуса пользователя ----------------
export const getInfoMemberStatusTC = (id) => {
   return (dispatch) =>{
      let userId = id
//      if(!userId) userId = 1496
      getUserStatus(userId)
      .then(data => {
         dispatch(setMemberStatus(data))
      })
   }
}

// ---------------- Запрос для обновления статуса ----------------
export const setInfoMemberStatusTC = (status) => {
   return (dispatch) =>{
      setStatus(status)
      .then(response => {
         
         if(response.data.resultCode === 0)
         dispatch(setMemberStatus(status))
      })
   }
}







export default profileReducer;
