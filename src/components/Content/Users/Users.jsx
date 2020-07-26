import React from 'react';
import styles from './users.module.css';
import * as axios from "axios";
import userPhoto from '../../../assets/images/def-ava.png';


class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <div className={styles.list}>
            {
                this.props.users.map(u => <div className={styles.item} key={u.id}>
                    <div className={styles.left}>
                        <div className={styles.ava}><img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/></div>
                        <div>
                            {u.followed
                                ? <button onClick={ () => {this.props.unfollow(u.id)} }>Unfollow</button>
                                : <button onClick={ () => {this.props.follow(u.id)} }>Follow</button> }
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
    }
}


export default Users;
