import React from 'react';
import s from './dialogItem.module.css';
import { NavLink } from "react-router-dom";

const Dialog = props => {
    return (
        <div className={s.item}>
            <div className={s.item_icon}>
                <img src="https://klike.net/uploads/posts/2019-03/1551512886_9.jpg" alt="avatar"/>
            </div>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;