import {ActionType} from "./state";
import {profileAPI, usersAPI} from "../api/api";

export const ADD_POST = "ADD-POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";


let initialState = {
    posts: [
        {id: 1, post: "Hi/ How are you?", likesCount: 12,},
        {id: 2, post: "It second post", likesCount: 23,},
        {id: 3, post: "It third post", likesCount: 23,},
        {id: 4, post: "It four post", likesCount: 23,},],
    profile: null,
    status: "",
};

const profileReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                post: action.newPost,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        case SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.profile
                }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPost:string):any => ({type: ADD_POST, newPost});
export const setUserProfileAC = (profile:any) => ({type:SET_USER_PROFILE, profile})
export const setStatusAC = (status:any) => ({type:SET_STATUS, status})

export const getUserProfile = (userId:number) => (dispatch:any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data))
    })
}
export const getStatus = (userId:number) => (dispatch:any) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusAC(response.data))
    })
}
export const updateStatus = (status:any) => (dispatch:any) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))}
    })
}

export default profileReducer;