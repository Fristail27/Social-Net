import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

export const ADD_POST = "ADD-POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";

type PostType = {
    id: number,
    post: string,
    likesCount: number,
};
type ContactsType = {
    facebook: string | null;
    github: string | null;
    instagram: string | null;
    mainLink: string | null;
    twitter: string | null;
    vk: string | null;
    website: string | null;
    youtube: string | null;
}
export type ProfileType = {
    aboutMe: string | null;
    contacts: ContactsType
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    photos: {small: string | null, large: string | null}
    userId: number
}
type InitialStateType = {
    posts: PostType[];
    profile: ProfileType | null;
    status: string | null;
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, post: "Hi/ How are you?", likesCount: 12,},
        {id: 2, post: "It second post", likesCount: 23,},
        {id: 3, post: "It third post", likesCount: 23,},
        {id: 4, post: "It four post", likesCount: 23,},],
    profile: null,
    status: "",
};

type AddPostActionType = {
    type: "ADD-POST";
    newPost: string;
}
type SetUserProfileActionType = {
    type: "SET_USER_PROFILE";
    profile: ProfileType;
}
type SetStatusActionType = {
    type: "SET_STATUS";
    status: string
}

type ActionType = AddPostActionType | SetUserProfileActionType | SetStatusActionType

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
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

export const addPostActionCreator = (newPost:string):AddPostActionType => ({type: ADD_POST, newPost});
export const setUserProfileAC = (profile:ProfileType): SetUserProfileActionType => ({type:SET_USER_PROFILE, profile})
export const setStatusAC = (status:string):SetStatusActionType => ({type:SET_STATUS, status})

export const getUserProfile = (userId:number) => (dispatch: Dispatch<SetUserProfileActionType>) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data))
    })
}
export const getStatus = (userId:number) => (dispatch: Dispatch<SetStatusActionType>) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusAC(response.data))
    })
}
export const updateStatus = (status:string) => (dispatch: Dispatch<SetStatusActionType>) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))}
    })
}

export default profileReducer;