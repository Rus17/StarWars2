import Login from '../Login/Login'
import {loginTC} from './../../redux/authReducer'
import {connect} from 'react-redux'


let MapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth
   }
}

let MapDispatchToProps = (dispatch) => {
   return{
      loginTC: (email, password, rememberMe) => {dispatch(loginTC(email, password, rememberMe))}
   }
}

const LoginContainer = connect(MapStateToProps, MapDispatchToProps)(Login)

export default LoginContainer
