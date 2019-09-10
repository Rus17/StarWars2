import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {
   getInfoMemberTC,
   getInfoMemberStatusTC,
   setInfoMemberStatusTC
} from './../../redux/profileReducer'
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {
   componentDidMount(props){                 //this.props.match.params.userId - ????????

      let id = this.props.match.params.userId
      if(!id) id = this.props.id

      this.props.getInfoMemberTC(id)
      this.props.getInfoMemberStatusTC(id)
   }

   render() {
      return <Profile {...this.props}
                  profile={this.props.profile}
                  status={this.props.status}
                  setStatus={this.props.setInfoMemberStatusTC}/>
   }
}

let MapStateToProps = (state) => {

   return ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   id: state.auth.id,
   isAuth: state.auth.isAuth
})}

let WithURLdataContainerComponent = withRouter(ProfileContainer)  //withRouter - Закидывает данные из URL в ProfileContainer

export default connect (MapStateToProps, {
   getInfoMemberTC,
   getInfoMemberStatusTC,
   setInfoMemberStatusTC
}) (WithURLdataContainerComponent)
