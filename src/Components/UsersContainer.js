import Users from "./Users"
import {handlerAddUser} from "./../redux/usersReducer.js"
import {connect} from "react-redux"


let MapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
}

let MapDispatchToProps = (dispatch) => {
   return {      
      addUser: (name) => {dispatch(handlerAddUser(name))}
   }
}

const UsersContainer = connect (MapStateToProps, MapDispatchToProps) (Users)

export default UsersContainer
