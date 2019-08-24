import React from 'react';
import {connect} from "react-redux";
import Dimich from './Dimich'
import * as axios from 'axios'
import {
   follow,
   unfollow,
   setMembers,
   setCurrentPage,
   setUsersCount,
   setFetching
} from "./../../redux/membersFromDimichReducer";
import Preloader from './../Preloader/Preloader'

class DimichAPIComponent extends React.Component {

   componentDidMount(props){
      if (this.props.members.length === 0) {
         this.props.setFetching()
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
               this.props.setFetching()
               this.props.setMembers(response.data.items)
               this.props.setUsersCount(response.data.totalCount)
         })
      }
   }

   handlerCurrentPage = (p) => {
      this.props.setFetching()
      this.props.setCurrentPage(p)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
               this.props.setFetching()
               this.props.setMembers(response.data.items)})
   }

   render(){

      return <>
               {this.props.isFetching ? <Preloader/> : null}
               <Dimich totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      members={this.props.members}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      handlerCurrentPage={this.handlerCurrentPage}
                      currentPage={this.props.currentPage}
               />
            </>
   }
}

let mapStateToProps = (state) => {
   return {
      members: state.membersPage.members,
      pageSize: state.membersPage.pageSize,
      totalUsersCount: state.membersPage.totalUsersCount,
      currentPage: state.membersPage.currentPage,
      isFetching: state.membersPage.isFetching
   }
}

export default connect(mapStateToProps, {
                        follow,
                        unfollow,
                        setMembers,
                        setCurrentPage,
                        setUsersCount,
                        setFetching
   })(DimichAPIComponent);
