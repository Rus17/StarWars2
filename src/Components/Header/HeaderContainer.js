import React from 'react'
import Header from "./Header"
import {connect} from 'react-redux'
import {setUserData} from '../../redux/authReducer'
import {getMeInformation} from './../../api/api'

class HeaderContainer extends React.Component{
   
   componentDidMount(props){
      getMeInformation().then(data => {         
            this.props.setUserData(
               data.id, 
               data.email, 
               data.login
            )            
         })
   }
   
   render() {   
      return <Header {...this.props} />
   }
}

let mapStateToProps = (state) => {
   return {
      login: state.auth.login
   }
}
   
export default connect (mapStateToProps, {setUserData}) (HeaderContainer)

