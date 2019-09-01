import {getUserInformation} from '../api/api'
const SET_MEMBERS_PROFILE = 'SET_MEMBERS_PROFILE'

let initialState = {
   profile: null
};

const profileReducer = (state = initialState, action) => {

   switch(action.type) {
      case SET_MEMBERS_PROFILE:{
         return {
            ...state,
            profile: action.profile
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




// ----------------- TC -----------------

export const getInfoMemberTC = (id) => {
   return (dispatch) =>{
      let userId = id
      if(!userId) userId = 2
      getUserInformation(userId)
      .then(data => {
         dispatch(setMemberProfile(data))
      })
   }
}






export default profileReducer;
