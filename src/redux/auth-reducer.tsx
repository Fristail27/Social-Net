import {authAPI} from "../api/api";

export const SET_USER_DATA = "SET_USER_DATA";




export type setAuthUserDataActionType = {
    type: "SET_USER_DATA"
    data: {
        id:number
        email:string
        login:string
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
                ...action.data,
                isAuth:true
            }
        default:
            return state;
    }
};


export const setAuthUserDataAC = (id:number, email:string, login:string):setAuthUserDataActionType => ({type: SET_USER_DATA, data:{id, email, login}});

export const getAuthUserData = ()=> (dispatch:any) => {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode ===0) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login))
            }
        })
}



export default authReducer;