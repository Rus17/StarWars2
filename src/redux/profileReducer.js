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

export const setMemberProfile = (profile) => {
   return ({
      type: SET_MEMBERS_PROFILE,
      profile
   })
}

export default profileReducer;
