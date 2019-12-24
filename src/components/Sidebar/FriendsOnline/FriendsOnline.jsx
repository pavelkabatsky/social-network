import React from 'react';
import style from './FriendsOnline.module.css';
import FriendsOnlineItem from './FriendsOnlineItem/FriendsOnlineItem';

const FriendsOnline = () => {
    return (
        <div>
            <h4 className={style.title}>Друзья онлайн</h4>
            <div  className={style.wrapper}>
                <FriendsOnlineItem/>
                <FriendsOnlineItem/>
                <FriendsOnlineItem/>
                <FriendsOnlineItem/>
                <FriendsOnlineItem/>
                <FriendsOnlineItem/>
            </div>
        </div>
    )
}

export default FriendsOnline;