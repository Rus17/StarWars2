const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_MEMBERS = 'SET_MEMBERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'

let initialState = {
   members: [ ],
   pageSize: 4,
   totalUsersCount: 0,
   currentPage: 1
};

const membersFromDimichReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                members: state.members.map( u =>  {
                    if (u.id === action.memberId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                members: state.members.map( u =>  {
                    if (u.id === action.memberId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_MEMBERS: {
            return {
               ...state,
               members: [ ...action.members ]
            }
        }
       case SET_CURRENT_PAGE: {
          return {
          ...state,
         currentPage: action.p
          }
       }
       case SET_USERS_COUNT: {
          return {
          ...state,
         totalUsersCount: action.usersCount
          }
       }    
        default:
            return state;
    }
}


export const followAC = (memberId) => ({type: FOLLOW, memberId })
export const unfollowAC = (memberId) => ({type: UNFOLLOW, memberId })
export const setMembersAC = (members) => ({type: SET_MEMBERS, members })
export const currentPageAC = (p) => ({type: SET_CURRENT_PAGE, p})
export const setUsersCountAC = (usersCount) => ({type: SET_USERS_COUNT, usersCount})

export default membersFromDimichReducer;
