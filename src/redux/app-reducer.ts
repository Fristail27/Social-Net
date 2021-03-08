import { Dispatch } from "redux";
import {getAuthUserData} from "./auth-reducer";

export const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type initiolizedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

let initialState  = {
    initialized: false as boolean,
    globalError: null as string | null
};

type AuthStateType = typeof  initialState

type ActionType = initiolizedSuccessActionType


const appReducer = (state = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
};

export const initiolizedSuccessAC = ():initiolizedSuccessActionType => ({
    type: INITIALIZED_SUCCESS,
});

export const initializeAppTC = () => (dispatch:Dispatch<any>) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initiolizedSuccessAC())
        })

}

// export const login = (email:string, password:string, rememberMe:boolean) => (dispatch:any) => {
//     authAPI.login(email, password, rememberMe)
//         .then(response => {
//             if(response.data.resultCode === ResultCodesEnum.Success) {
//                 dispatch(getAuthUserData())
//             } else {
//                 const message = (response.data.messages.length > 0) ? response.data.messages[0] : "some error"
//                 dispatch(stopSubmit("login", {_error: message}))
//             }
//         })
// }
//
// export const logout = ()=> (dispatch:Dispatch<SetAuthUserDataActionType>) => {
//     authAPI.logout()
//         .then(response => {
//             if(response.data.resultCode ===0) {
//                 dispatch(setAuthUserDataAC(null, null, null, false))
//             }
//         })
// }

export default appReducer;