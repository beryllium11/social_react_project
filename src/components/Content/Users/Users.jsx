import React from 'react';
import styles from './users.module.css';
import * as axios from "axios";
import userPhoto from '../../../assets/images/def-ava.png';


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
         //   this.props.setTotalUsersCount(response.data.totalCount);
        });

    }
    onPageChange = (currentPage) => {
        this.props.setSelectedPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={styles.list}>
            <div className={styles.pager}>
                <p>Pages:</p>
                {pages.map(p => {
                   return <span className={`${styles.pageItem} ${this.props.selectedPage === p && styles.selected}`}
                   onClick={(e) => { this.onPageChange(p); }} key={p.id}>{p}</span>
                })}
            </div>
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
