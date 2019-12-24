import React from 'react';
import s from './Header.module.css';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
// import defaultAvatar from '../../assets/images/default_ava.png'

const Header = (props) => {
    
    const onLogout = ()=> {
        props.logout();
    }
    
    return (
        <header className={s.header}>
            <img src={logo} alt="logo" />
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to='/profile'>Login</NavLink>}
                { props.isAuth ? <button onClick={onLogout}>Log out</button> : undefined }
            </div>
        </header>
        
    );
}

export default Header;