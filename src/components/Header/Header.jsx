import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://www.freelogodesign.org/Content/img/logo-ex-2.png" alt="logo"/>
            <div className={styles.loginBlock}>
                {props.isAuth ?<div> <span>{props.login}</span> <button onClick={props.logout}>Logout</button></div>
                     :  <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    );
};
export default Header;
