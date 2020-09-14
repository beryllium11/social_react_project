import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../../assets/images/def-ava.png';
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={styles.list}>
        <div className={styles.pager}>
            <p>Pages:</p>
            {pages.map(p => {
                return <span className={`${styles.pageItem} ${props.selectedPage === p && styles.selected}`}
                             onClick={(e) => { props.onPageChange(p); }} >{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div className={styles.item} key={u.id}>
                <div className={styles.left}>
                    <NavLink to={'/profile/'+u.id}>
                    <div className={styles.ava}><img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/></div>
                    </NavLink>
                        <div>
                        {u.followed
                            ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                            : <button onClick={ () => {props.follow(u.id)} }>Follow</button> }
                    </div>
                </div>
                <div className={styles.right}>
                    <div className="top">
                        <p className={styles.userName}>{u.name}</p>
                        <p className={styles.userStatus}>id: {u.id}</p>
                    </div>
                    <div className="bottom">
                        <p className={styles.userCountry}>{"u.location.country"}</p>
                        <p className={styles.userCity}>{"u.location.city"}</p>
                    </div>
                </div>
            </div>)
        }
    </div>

};
export default Users;
