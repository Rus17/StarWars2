import React from 'react'
import Header from "./Header"
import {connect} from 'react-redux'
import {setUserData, logOutTC} from '../../redux/authReducer'

class HeaderContainer extends React.Component{

   render() {
      return <Header {...this.props} />
   }
}

let mapStateToProps = (state) => {
   return {
      login: state.auth.login
   }
}

export default connect(mapStateToProps, {setUserData, logOutTC}) (HeaderContainer)
