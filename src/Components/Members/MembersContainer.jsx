import React from 'react';
import {connect} from "react-redux";
import Members from './Members'

import {
   getMembersTC,
   unFollowTC,
   followTC
} from "./../../redux/membersReducer";

import Preloader from './../Preloader/Preloader'

import {
      getMembers,
      getPageSize,
      getTotalUsersCount,
      getCurrentPage,
      getIsFetching,
      getInTheProcess} from './../../redux/membersSelectors'




class MembersAPIComponent extends React.Component {

   componentDidMount(props){
      this.props.getMembersTC(1, this.props.pageSize)
   }

// Обработчик нажатия на номер странички.
// Получает от сервера следующую порцию пользователей и записывает их в state
   handlerCurrentPage = (p) => {
      this.props.getMembersTC(p, this.props.pageSize)
   }

   render(){

      return <>
               {this.props.isFetching ? <Preloader/> : null}
               <Members
                      members={this.props.members}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      handlerCurrentPage={this.handlerCurrentPage}
                      currentPage={this.props.currentPage}
                      inTheProcess={this.props.inTheProcess}
                      unFollowTC={this.props.unFollowTC}
                      followTC={this.props.followTC}
               />
            </>
   }
}

//let mapStateToProps = (state) => {
//   return {
//      members: state.membersPage.members,
//      pageSize: state.membersPage.pageSize,
//      totalUsersCount: state.membersPage.totalUsersCount,
//      currentPage: state.membersPage.currentPage,
//      isFetching: state.membersPage.isFetching,
//      inTheProcess: state.membersPage.inTheProcess
//   }
//}


let mapStateToProps = (state) => {
   return {
      members: getMembers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      inTheProcess: getInTheProcess(state)
   }
}






export default connect(mapStateToProps, {
                        getMembersTC,
                        unFollowTC,
                        followTC
   })(MembersAPIComponent);
