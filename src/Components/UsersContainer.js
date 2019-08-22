import Users from "./Users"
import {handlerAddSymbolUser} from "./../redux/usersReducer.js"
import {handlerAddUser} from "./../redux/usersReducer.js"
import {connect} from "react-redux"


let MapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      symbolForValue: state.usersPage.symbolAddUser
   }
}

let MapDispatchToProps = (dispatch) => {

   return {
      addSymbol: (e) => {dispatch(handlerAddSymbolUser(e.target.value))},
      addUser: () => {dispatch(handlerAddUser())}
   }
}

const UsersContainer = connect (MapStateToProps, MapDispatchToProps) (Users)

export default UsersContainer
