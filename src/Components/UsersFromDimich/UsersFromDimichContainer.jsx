import React from 'react';
import UsersFromDimich from "./UsersFromDimich";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "./../../redux/usersFromDimichReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersFromDimich);
