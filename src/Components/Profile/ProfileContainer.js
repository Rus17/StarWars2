import React from 'react'
import Profile from './Profile'
import * as axios from 'axios'
import {connect} from 'react-redux'
import {setMemberProfile} from './../../redux/profileReducer'

class ProfileContainer extends React.Component {
   componentDidMount(props){
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1034`)
      .then(response => {
         this.props.setMemberProfile(response.data)
      })
   }

   render() {
      return <Profile {...this.props} profile={this.props.profile}/>
   }
}

let MapStateToProps = (state) => ({
   profile: state.profilePage.profile
})

export default connect (MapStateToProps, {setMemberProfile}) (ProfileContainer)
