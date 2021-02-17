import {usersAPI} from "../api/api";
import axios from "axios";
import {UsersStateType, UserType} from "../types/types";
import {Dispatch} from "redux";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState :UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

type FollowSuccessType = {
    type: typeof FOLLOW;
    userId: number;
}
type UnfollowSuccessType = {
    type: typeof UNFOLLOW;
    userId: number;
}
type SetUsersActionType = {
    type: typeof SET_USERS;
    users: UserType[];
}
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE;
    currentPage: number;
}
type SetUsersTotalCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT;
    totalUsersCount: number;
}
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING;
    isFetching: boolean
}
type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
    isFetching: boolean;
    userId: number;
}
type ActionType =
    FollowSuccessType
    | UnfollowSuccessType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | ToggleIsFetchingActionType
    | ToggleFollowingProgressActionType

const usersReducer = (state: UsersStateType = initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map((u:UserType) => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u:UserType) => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                }),
            }
        case  SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage:action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount:action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching:action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id=> id !== action.userId)}
        default:
            return state;
    }
};

export const followSuccess = (userId:number):FollowSuccessType => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId:number):UnfollowSuccessType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UserType>):SetUsersActionType => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage:number):SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalUsersCount:number):SetUsersTotalCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const ToggleIsFetchingAC = (isFetching:boolean):ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
export const ToggleFollowingProgress = (isFetching:boolean, userId:number):ToggleFollowingProgressActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsersThunkCreator = (currentPage:number, pageSize:number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(ToggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsersAC(data.items))
        dispatch(setUsersTotalCountAC(data.totalCount))
        dispatch(ToggleIsFetchingAC(false))
    })
};
export const follow = (userId:number) => (dispatch:Dispatch<ToggleFollowingProgressActionType | FollowSuccessType>) =>{
    dispatch(ToggleFollowingProgress(true, userId))
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        withCredentials:true,
        headers: {
            "API-KEY":"29b8c3f6-3989-47ac-8b51-b97568488b2d"
        }
    })
        .then((response) => {
            if(response.data.resultCode===0) {
                dispatch(followSuccess(userId))
            }
            dispatch(ToggleFollowingProgress(false, userId))
        })
}
export const unfollow = (userId:number) => (dispatch:Dispatch<ToggleFollowingProgressActionType | UnfollowSuccessType>) => {
    dispatch(ToggleFollowingProgress(true, userId))
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials:true,
        headers: {
            "API-KEY":"29b8c3f6-3989-47ac-8b51-b97568488b2d"
        }
    })
        .then(response => {
            if(response.data.resultCode===0) {
               dispatch(unfollowSuccess(userId))
            }
            dispatch(ToggleFollowingProgress(false, userId))
        })
    dispatch(unfollowSuccess(userId))
};

export default usersReducer;