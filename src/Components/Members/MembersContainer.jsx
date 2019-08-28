import React from 'react';
import {connect} from "react-redux";
import Members from './Members'
import {
   follow,
   unfollow,
   setMembers,
   setCurrentPage,
   setFetching,
   setinTheProcess,
   getMembersThunkCreator
} from "./../../redux/membersReducer";
import Preloader from './../Preloader/Preloader'
import {getUsers} from './../../api/api'

class MembersAPIComponent extends React.Component {

   componentDidMount(props){
      this.props.getMembersThunkCreator()

//         this.props.setFetching()
//         getUsers(this.props.currentPage, this.props.pageSize).then(data => {
//               this.props.setFetching()
//               this.props.setMembers(data.items)
//               this.props.setUsersCount(data.totalCount)
//         })
   }

   handlerCurrentPage = (p) => {
      this.props.setFetching()
      this.props.setCurrentPage(p)
      getUsers(p, this.props.pageSize).then(data => {
               this.props.setFetching()
               this.props.setMembers(data.items)})
   }

   render(){

      return <>
               {this.props.isFetching ? <Preloader/> : null}
               <Members totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      members={this.props.members}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      handlerCurrentPage={this.handlerCurrentPage}
                      currentPage={this.props.currentPage}
                      setinTheProcess={this.props.setinTheProcess}
                      inTheProcess={this.props.inTheProcess}
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
      isFetching: state.membersPage.isFetching,
      inTheProcess: state.membersPage.inTheProcess
   }
}

export default connect(mapStateToProps, {
                        follow,
                        unfollow,
                        setMembers,
                        setCurrentPage,
                        setFetching,
                        setinTheProcess,
                        getMembersThunkCreator
   })(MembersAPIComponent);
