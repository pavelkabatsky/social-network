import React from 'react';
import { connect } from "react-redux";
import Users from "./Users";
import { setUsers, changePage, setTotalUsersCount, 
        setFollowingInProgress,getUsers,setFollowToUser,
        setUnfollowToUser } from "../../redux/usersReducer";
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {
    render = () => {
        return (
            <Users
                findUsers = {this.props.findUsers}
                totalUsersCount = {this.props.totalUsersCount}
                usersOnPage = {this.props.usersOnPage}
                currentPage = {this.props.currentPage}
                onChangePage = {this.onChangePage}
                isLoading = {this.props.isLoading}
                followingInProgress={this.props.followingInProgress}
                setFollowingInProgress={this.props.setFollowingInProgress}
                setUnfollowToUser={this.props.setUnfollowToUser}
                setFollowToUser={this.props.setFollowToUser}
            />
        )
    }

    onChangePage = (pageNumber)=> {
        this.props.getUsers(pageNumber, this.props.usersOnPage);
    }

    componentDidMount() {
        if (this.props.findUsers.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.usersOnPage);
        }
    }
}

let mapStateToProps = (state) => {
    return {
        findUsers : state.findUsers.users,
        totalUsersCount : state.findUsers.totalUsersCount,
        usersOnPage : state.findUsers.usersOnPage,
        currentPage : state.findUsers.currentPage,
        isLoading : state.findUsers.isLoading,
        followingInProgress : state.findUsers.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps,{
        setUsers,
        changePage,
        setTotalUsersCount,
        setFollowingInProgress,
        getUsers,
        setUnfollowToUser,
        setFollowToUser}),
    withAuthRedirect
)(UsersContainer);

