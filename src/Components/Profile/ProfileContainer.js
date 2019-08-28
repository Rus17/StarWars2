import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {setMemberProfile} from './../../redux/profileReducer'
import {withRouter} from 'react-router-dom'
import {getUserInformation} from './../../api/api'

class ProfileContainer extends React.Component {
   componentDidMount(props){
      let userId = this.props.match.params.userId
      if(!userId) userId = 2
      getUserInformation(userId).then(data => {
         this.props.setMemberProfile(data)
      })
   }

   render() {
      return <Profile {...this.props} profile={this.props.profile}/>
   }
}

let MapStateToProps = (state) => ({
   profile: state.profilePage.profile
})

let WithURLdataContainerComponent = withRouter(ProfileContainer)  //withRouter - Закидывает данные из URL в ProfileContainer

export default connect (MapStateToProps, {setMemberProfile}) (WithURLdataContainerComponent)
