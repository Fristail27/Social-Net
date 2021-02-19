import { Dispatch } from "redux";
import { stopSubmit } from "redux-form";
import {authAPI, ResultCodesEnum} from "../api/api";

export const SET_USER_DATA = "SET_USER_DATA";

export type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: {
        userId:number | null
        email:string | null
        login:string | null
        isAuth:boolean
    }
}

let initialState  = {
    userId: null as number | null,
    email: null as string |null,
    login: null as string |null,
    isAuth:false
};

type AuthStateType = typeof  initialState

type ActionType = SetAuthUserDataActionType


const authReducer = (state = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};

export const setAuthUserDataAC = (userId:number | null, email:string|null, login:string|null, isAuth:boolean):SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload:{userId, email, login, isAuth}
});

export const getAuthUserData = () => (dispatch:Dispatch<SetAuthUserDataActionType>) => {
    return authAPI.me()
        .then(response => {
            if(response.data.resultCode === ResultCodesEnum.Success) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
}

export const login = (email:string, password:string, rememberMe:boolean) => (dispatch:any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === ResultCodesEnum.Success) {
                dispatch(getAuthUserData())
            } else {
                const message = (response.data.messages.length > 0) ? response.data.messages[0] : "some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}

export const logout = ()=> (dispatch:Dispatch<SetAuthUserDataActionType>) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode ===0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
}

export default authReducer;