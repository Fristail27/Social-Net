import {usersAPI} from "../api/api";
import {UsersStateType, UserType} from "../types/types";
import {Dispatch} from "redux";
import { updateObjectInArray } from "../utils/object-helpers";

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
                users: updateObjectInArray(state.users, action.userId, "id", {followed:true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed:false})
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

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(ToggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))

    const response = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(setUsersAC(response.items))
    dispatch(setUsersTotalCountAC(response.totalCount))
    dispatch(ToggleIsFetchingAC(false))
};

const followUnfollowFlow = async (dispatch: any, ActionCreator: (id: number) => FollowSuccessType | UnfollowSuccessType, apiMethod: (id: number) => any, userId: number) => {
    dispatch(ToggleFollowingProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(ActionCreator(userId))
    }
    dispatch(ToggleFollowingProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: Dispatch<ToggleFollowingProgressActionType | FollowSuccessType>) => {
    followUnfollowFlow(dispatch, followSuccess, usersAPI.follow.bind(usersAPI), userId)

}
export const unfollow = (userId: number) => async (dispatch: Dispatch<ToggleFollowingProgressActionType | UnfollowSuccessType>) => {
    followUnfollowFlow(dispatch, unfollowSuccess, usersAPI.unfollow.bind(usersAPI), userId)
};

export default usersReducer;