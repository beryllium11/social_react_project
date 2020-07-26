import React from "react";
import classes from './Sidebar.module.css';


const Sidebar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="/dialog">Messages</a>
            </div>
            <div className={classes.item}>
                <a href="/users">Users</a>
            </div>
        </nav>
    )
};


export default Sidebar;
