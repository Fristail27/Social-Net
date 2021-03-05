import { Dispatch } from "redux";
import { stopSubmit } from "redux-form";
import {authAPI, ResultCodesEnum, securityAPI} from "../api/api";

export const SET_USER_DATA = "SET_USER_DATA";
export const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

export type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: {
        userId:number | null
        email:string | null
        login:string | null
        isAuth:boolean
    }
}
export type GetCaptchaUrlActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    captchaUrl: string
}

let initialState  = {
    userId: null as number | null,
    email: null as string |null,
    login: null as string |null,
    isAuth:false as boolean,
    captchaUrl: null as string | null // если null то капча не обязательна
};

type AuthStateType = typeof  initialState


type ActionType = SetAuthUserDataActionType | GetCaptchaUrlActionType


const authReducer = (state = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
};

export const setAuthUserDataAC = (userId:number | null, email:string|null, login:string|null, isAuth:boolean):SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload:{userId, email, login, isAuth}
});

export const getCaptchaUrlAC = (captchaUrl: string):GetCaptchaUrlActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl
});

export const getAuthUserData = () => async (dispatch: Dispatch<SetAuthUserDataActionType>) => {
    const response = await authAPI.me()

    if (response.data.resultCode === ResultCodesEnum.Success) {
        const {id, email, login} = response.data.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha:string) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        const message = (response.data.messages.length > 0) ? response.data.messages[0] : "some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch<SetAuthUserDataActionType>) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch<GetCaptchaUrlActionType>) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlAC(captchaUrl))
}

export default authReducer;