import React from 'react';
import s from './UserInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import UserStatus from '../UserStatus/UserStatus';

const UserInfo = (props) => {
    
    if (!props.userProfile) {
        return <Preloader />
    }

    return (
        <>
            <div className={s.userInfo}>
                <div className={s.avatar}>
                    <img src={props.userProfile.photos.small} alt="" />
                </div>
                <ul className={s.info}>
                    <li>{props.userProfile.fullName}</li>
                    <li>{props.userProfile.aboutMe ? `About me : ${props.userProfile.aboutMe}` : null}</li>
                    <UserStatus userStatus={props.userStatus} updateUserStatus={props.updateUserStatus}/>
                </ul>
            </div>
            
            <div >
                <div>Контакты:</div>
                <div>{props.userProfile.contacts.facebook ? `Facebook : ${props.userProfile.contacts.facebook}` : null}</div>
                <div>{props.userProfile.contacts.vk ? `Vkontacte : ${props.userProfile.contacts.vk}` : null}</div>
                <div>{props.userProfile.contacts.twitter ? `Twitter : ${props.userProfile.contacts.twitter}` : null}</div>
                <div>{props.userProfile.contacts.instagram ? `Instagram : ${props.userProfile.contacts.instagram}` : null}</div>
                <div>{props.userProfile.contacts.github ? `Github : ${props.userProfile.contacts.github}` : null}</div>
            </div>
        </>
    );
}

export default UserInfo;