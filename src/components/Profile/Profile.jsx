import React from 'react';
import s from './Profile.module.css'
import UserInfo from './UserInfo/UserInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {

    return (
        
        <main className={s.profile}>
            <UserInfo 
                userProfile={props.profile} 
                userStatus={props.userStatus}
                updateUserStatus={props.updateUserStatus}
            />
            <PostsContainer/>
        </main>
    );
}

export default Profile;