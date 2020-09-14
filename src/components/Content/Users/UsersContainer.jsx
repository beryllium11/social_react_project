import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setSelectedPage,
    setTotalUsersCount,
    toggleIsFetching
} from "../../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import loader from "../../../assets/images/loader.svg";
import styles from './users.module.css';
import Preloader from "../../common/Preloader/Preloader";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            //   this.props.setTotalUsersCount(response.data.totalCount);
        });

    }
    onPageChange = (currentPage) => {
        this.props.toggleIsFetching(true);
        this.props.setSelectedPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        return <div>
            { this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          selectedPage={this.props.selectedPage}
                          onPageChange={this.onPageChange}
                          users={this.props.users}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        selectedPage: state.usersPage.selectedPage,
        isFetching: state.usersPage.isFetching
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setSelectedPage: (curPage) => {
            dispatch(setSelectedPageAC(curPage));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
};*/


export default connect(mapStateToProps, { follow, unfollow, setUsers, setSelectedPage, setTotalUsersCount, toggleIsFetching}
) (UsersAPIComponent);
