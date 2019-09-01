import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {setMemberProfile, getInfoMemberTC} from './../../redux/profileReducer'
import {withRouter} from 'react-router-dom'
import {getUserInformation} from './../../api/api'

class ProfileContainer extends React.Component {
   componentDidMount(props){ //this.props.match.params.userId - ????????
      this.props.getInfoMemberTC(this.props.match.params.userId)
   }

   render() {
      return <Profile {...this.props} profile={this.props.profile}/>
   }
}

let MapStateToProps = (state) => ({
   profile: state.profilePage.profile
})

let WithURLdataContainerComponent = withRouter(ProfileContainer)  //withRouter - Закидывает данные из URL в ProfileContainer

export default connect (MapStateToProps, {
   setMemberProfile,
   getInfoMemberTC
}) (WithURLdataContainerComponent)
