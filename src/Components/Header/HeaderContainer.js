import React from 'react'
import Header from "./Header"
import {connect} from 'react-redux'
import {setUserData, getInfoMe} from '../../redux/authReducer'

class HeaderContainer extends React.Component{

   componentDidMount(props){
      this.props.getInfoMe()
   }

   render() {
      return <Header {...this.props} />
   }
}

let mapStateToProps = (state) => {
   return {
      login: state.auth.login,
      id: state.auth.id,
      email: state.auth.email
   }
}

export default connect (mapStateToProps, {setUserData, getInfoMe}) (HeaderContainer)
