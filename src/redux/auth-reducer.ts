import {authAPI} from "../api/api";

export const SET_USER_DATA = "SET_USER_DATA";




export type setAuthUserDataActionType = {
    type: "SET_USER_DATA"
    payload: {
        id:number | null
        email:string | null
        login:string | null
        isAuth:boolean
    }
}

export type AuthStateType = {
    userId: number | null,
    email: string |null,
    login: string |null,
    isAuth:boolean
}

let initialState :AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
};

type ActionType = setAuthUserDataActionType


const authReducer = (state: AuthStateType = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};


export const setAuthUserDataAC = (id:number | null, email:string|null, login:string|null, isAuth:boolean):setAuthUserDataActionType => ({type: SET_USER_DATA, payload:{id, email, login, isAuth}});

export const getAuthUserData = ()=> (dispatch:any) => {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode ===0) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
}

export const login = (email:string, password:string, rememberMe:boolean)=> (dispatch:any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode ===0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = ()=> (dispatch:any) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode ===0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
}



export default authReducer;