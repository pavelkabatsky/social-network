import React from 'react';
import { NavLink } from "react-router-dom";
import photoUrl from '../../../assets/images/user.jpg';
import styles from './User.module.css';

const User = (props) => {

    let setFollow = ()=> {
        props.setFollowToUser(props.userId)
    }
    let setUnfollow = ()=> {
        props.setUnfollowToUser(props.userId)
    }
    
    return (
        <div className={styles.userItem}>
            <div className={styles.itemInner}>
                <div className={styles.avatarBlock}>

                    <NavLink to={'/profile/' + props.userId}>
                        <div className={styles.avatar}>
                            <img src={props.userPhotoUrl !== null ? props.userPhotoUrl : photoUrl} alt="avatar" />
                        </div>
                    </NavLink>

                    {props.followed 
                        ? <button disabled={props.followingInProgress.some(id => id === props.userId)} 
                            onClick={setUnfollow}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.userId)} 
                            onClick={setFollow}>Follow</button>
                    }

                </div>
                <div className={styles.info}>
                    <div className={styles.userName}>{props.userName}</div>
    
                    <div className={styles.userStatus}>{props.userStatus !== null ? props.userStatus : 'Hello! I`m using "Socialochka!"'}</div>
                </div>
            </div>

        </div>
    )
}

export default User;