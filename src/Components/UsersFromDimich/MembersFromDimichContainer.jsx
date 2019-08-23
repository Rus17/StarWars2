import React from 'react';
import {connect} from "react-redux";
import Dimich from './Dimich'
import * as axios from 'axios'
import {followAC, setMembersAC, unfollowAC, currentPageAC, setUsersCountAC} from "./../../redux/membersFromDimichReducer";

class DimichAPIComponent extends React.Component {
      
   componentDidMount(props){
      if (this.props.members.length === 0) {       
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
               this.props.setMembers(response.data.items)
               this.props.setUsersCount(response.data.totalCount)
         })
      }
   }
   
   handlerCurrentPage = (p) => {
      this.props.setCurrentPage(p)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {this.props.setMembers(response.data.items)})      
   }   
      
   render(){
      
      return <Dimich totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      members={this.props.members}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      handlerCurrentPage={this.handlerCurrentPage}
                      currentPage={this.props.currentPage}/>
   }
}

let mapStateToProps = (state) => {
   return {
      members: state.membersPage.members,
      pageSize: state.membersPage.pageSize,
      totalUsersCount: state.membersPage.totalUsersCount,
      currentPage: state.membersPage.currentPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (memberId) => {
         dispatch(followAC(memberId));
      },
      unfollow: (memberId) => {
         dispatch(unfollowAC(memberId));
      },
      setMembers: (members) => {
         dispatch(setMembersAC(members));
      },
      setCurrentPage: (p) => {
         dispatch(currentPageAC(p))
      },
      setUsersCount: (usersCount) => {
         dispatch(setUsersCountAC(usersCount))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(DimichAPIComponent);
