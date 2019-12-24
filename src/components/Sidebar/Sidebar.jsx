import React from 'react';
import s from './Sidebar.module.css'
import { NavLink } from "react-router-dom";
import FriendsOnline from './FriendsOnline/FriendsOnline';

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav>
                <ul>
                    <li className={s.item}>
                        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/find_users" activeClassName={s.active}>Find Users</NavLink>
                    </li>
                    <li>
                        <FriendsOnline/>
                    </li>
                
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;