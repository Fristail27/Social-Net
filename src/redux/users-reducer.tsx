import {ActionType} from "./state";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"


type UserType = {
    id: number | string
    photos: string
    followed: boolean
    fullName: string
    status: string
    location: {city: string, country:string},

}
type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage:number
    isFetching: boolean
    followingInProgress: number[]
}

let initialState :UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state: UsersStateType = initialState, action: any): UsersStateType => {
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
                    : state.followingInProgress.filter(id=> id != action.userId)}
        default:
            return state;
    }
};

export const followAC = (userId:string):any => ({type: FOLLOW, userId});
export const unfollowAC = (userId:string):any => ({type: UNFOLLOW, userId});
export const setUsersAC = (users:any):any => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage:number):any => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalUsersCount:number):any => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const ToggleIsFetchingAC = (isFetching:boolean):any => ({type: TOGGLE_IS_FETCHING, isFetching});
export const ToggleFollowingProgress = (isFetching:boolean, userId:number):any => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});



export default usersReducer;