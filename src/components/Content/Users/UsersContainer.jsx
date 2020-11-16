import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setSelectedPage,
    toggleFollowingProgress, getUsersThunkCreator
} from "../../../redux/usersReducer";
import Users from "./Users";
import styles from './users.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.selectedPage, this.props.pageSize);
    }
    onPageChange = (currentPage) => {
        this.props.setSelectedPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize);
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
                   followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};



export default compose(
   // withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, setUsers, setSelectedPage,
        toggleFollowingProgress, getUsers: getUsersThunkCreator}
    )
) (UsersAPIComponent)
