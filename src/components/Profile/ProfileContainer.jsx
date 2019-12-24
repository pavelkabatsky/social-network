import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {setUserProfile, getUserData, getUserStatus, updateUserStatusRequest} from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUserProfile, getAuthUserId, getIsAuth,getUserStatusSel } from '../../redux/profileSelectors';




class ProfileContainer extends React.Component {
    
    render () {
        return <Profile  
            profile = {this.props.userProfile} 
            userStatus={this.props.userStatus}
            updateUserStatus={this.props.updateUserStatusRequest}/>
    }
    
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authUserId;
        }
        this.props.getUserData(userId);
        this.props.getUserStatus(userId);
    }
    
}

let mapStateToProps =  (state) => {
    
    return {
        userProfile : getUserProfile(state),
        userStatus : getUserStatusSel(state),
        authUserId : getAuthUserId(state),
        isAuth : getIsAuth(state),
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserData, getUserStatus, updateUserStatusRequest}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


