import { createSelector } from "reselect";
import {AppRootStateType} from "./redux-store";


const getUsersSelector = (state:AppRootStateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector,(users)=>{
    return users
})

export const getPageSize = (state:AppRootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state:AppRootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state:AppRootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state:AppRootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state:AppRootStateType) => {
    return state.usersPage.followingInProgress
}