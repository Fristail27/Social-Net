import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsersThunkCreator,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {UsersStateType} from "../../types/types";
import {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../redux/users-selectors";

type MapStateToPropsType = UsersStateType

type MapDispatchToProps = {
    getUsersThunkCreator: (currentPage:number, pageSize: number) => void;
    follow: (userId:number)=> void;
    unfollow: (userid: number) => void;
}

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToProps


class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {  //типизировать connect <MapStateToPros, MapDispatchToProps,AppRootStateType >
     follow, unfollow, getUsersThunkCreator}),
    WithAuthRedirect
)(UsersContainer)