import React from 'react';
import style from './FriendsOnlineItem.module.css';

const FriendsOnlineItem = () => {
    return (
        <div className={style.item}>
            <div className={style.avatar}>
                <img src="https://klike.net/uploads/posts/2019-03/1551512886_9.jpg" alt="avatar"/>
            </div>
            <div className={style.name}>Ivan Petrov</div>
        </div>
    )
}

export default FriendsOnlineItem;