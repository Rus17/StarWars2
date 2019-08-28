import {getUsers} from './../api/api'
import {setUnFollow} from './../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_MEMBERS = 'SET_MEMBERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING'
const TOGGLE_IN_THE_PROCESS = 'TOGGLE_IN_THE_PROCESS'

let initialState = {
   members: [ ],
   pageSize: 4,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   inTheProcess: null
};

const membersReducer = (state = initialState, action) => {

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
      case TOGGLE_ISFETCHING:{
          return {
             ...state,
             isFetching: !state.isFetching
          }
      }
      case TOGGLE_IN_THE_PROCESS:{
         return {
            ...state,
            inTheProcess: action.userId
         }
      }

      default:
            return state;
    }
}


// Action Creator-ы
export const follow = (memberId) => ({type: FOLLOW, memberId })
export const unfollow = (memberId) => ({type: UNFOLLOW, memberId })
export const setMembers = (members) => ({type: SET_MEMBERS, members })
export const setCurrentPage = (p) => ({type: SET_CURRENT_PAGE, p})
export const setUsersCount = (usersCount) => ({
                                          type: SET_USERS_COUNT,
                                          usersCount
                                       })
export const setFetching = () => ({type: TOGGLE_ISFETCHING })
export const setinTheProcess = (userId) => ({
                                          type: TOGGLE_IN_THE_PROCESS,
                                          userId
                                          })

// ------------------------- Thunk Creator-ы -------------------------

// Получение списка пользователей для вывода на страничку
export const getMembersThunkCreator = (currentPage, pageSize) => {   
   return (dispatch) => {   
         dispatch(setFetching())
         getUsers(currentPage, pageSize)
            .then(data => {
               dispatch(setFetching())
               dispatch(setMembers(data.items))
               dispatch(setUsersCount(data.totalCount))
            })      
   }   
}

// Действия при нажатии кнопки "Отписаться"
export const followTC = (id) => {
   return (dispatch) => {
      setinTheProcess(id)
      setUnFollow(id)              // Запрос к серверу на отписку от пользователя (axios)
         .then(data => {if(data.resultCode == 0) {
            unfollow(id)
            setinTheProcess(null)
         }})
   }
}

export default membersReducer;
