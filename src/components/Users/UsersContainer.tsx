import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsersThunkCreator as getUsers,
    setCurrentPageAC as setCurrentPage,
    ToggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {UsersStateType} from "../../types/types";

type MapStateToPropsType = UsersStateType

type MapDispatchToProps = {
    getUsers: (currentPage:number, pageSize: number) => void;
    follow: (userId:number)=> void;
    unfollow: (userid: number) => void;
}

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToProps


class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
                </>
        )
    }
}

const mapStateToProps = (state: AppRootStateType):UsersStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {  //типизировать connect <MapStateToPros, MapDispatchToProps,AppRootStateType >
     follow, unfollow, getUsers}),
    WithAuthRedirect
)(UsersContainer)