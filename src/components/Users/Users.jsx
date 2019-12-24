import React from 'react';
import User from './User/User';
import styles from './Users.module.css'
import Preloader from '../Preloader/Preloader';
import Pagination from '../../common/Pagination/Pagination';

const Users = (props) => {
    let usersElements = props.findUsers.map(item => {
        return (
            <User
                key={item.id}
                userId={item.id}
                userName={item.name}
                userStatus={item.status}
                userPhotoUrl={item.photos.small}
                followed={item.followed}
                followingInProgress={props.followingInProgress}
                setUnfollowToUser={props.setUnfollowToUser}
                setFollowToUser={props.setFollowToUser}
            />
            
        )
    });

    // let pagesCount = Math.ceil(props.totalUsersCount / props.usersOnPage)
    // let pages = [];
    // for(let i = 1; i <= pagesCount; i++) {
    //     pages.push(i); 
    // }

    return (
        <div className={styles.usersWrapper}>
            {props.isLoading ? <Preloader/> : null}
            
            <div className={styles.pagination}>
                {/* <ul>
                    { 
                        pages.map( pageNumber => { 
                            return <li className={props.currentPage === pageNumber ? styles.current : null}
                            onClick={ ()=> { props.onChangePage(pageNumber)} }>{pageNumber}</li>})
                    }
                </ul> */}
                <Pagination totalItems={820} itemsOnPage = {10} itemsInSection={10}/>
            </div>
            {usersElements}
        </div>
    )
}

export default Users;