import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {PhotoInProfileType, PostType, ProfileType} from "../types/types";
import {AppRootStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

export const ADD_POST = "ADD-POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";
export const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
    posts: [
        {id: 1, post: "Hi/ How are you?", likesCount: 12,},
        {id: 2, post: "It second post", likesCount: 23,},
        {id: 3, post: "It third post", likesCount: 23,},
        {id: 4, post: "It four post", likesCount: 23,},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "" as string | null,
};
type InitialStateType = typeof initialState

type AddPostActionType = {
    type: typeof ADD_POST;
    newPost: string;
}
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE;
    profile: ProfileType;
}
type SetStatusActionType = {
    type: typeof SET_STATUS;
    status: string
}
type SavePhotoActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotoInProfileType
}

type ActionType = AddPostActionType | SetUserProfileActionType | SetStatusActionType | SavePhotoActionType

const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {
                        ...action.photos
                    }
                } as ProfileType
            }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPost: string): AddPostActionType => ({type: ADD_POST, newPost});
export const setUserProfileAC = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const setStatusAC = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
export const savePhotoAC = (photos: PhotoInProfileType): SavePhotoActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number) => async (dispatch: Dispatch<SetUserProfileActionType>) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfileAC(response.data))
}
export const getStatus = (userId: number) => async (dispatch: Dispatch<SetStatusActionType>) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<SetStatusActionType>) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    } catch (err) {
        alert(err)
    }


}
export const savePhoto = (file: File) => async (dispatch: Dispatch<SavePhotoActionType>) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoAC(response.data.data.photos))
    }
}
export const saveProfile = (profile: any) => async (dispatch: Dispatch<any>, getState: () => AppRootStateType) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId as any))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer;