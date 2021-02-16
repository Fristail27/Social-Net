import React, { ComponentType } from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppRootStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect <T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsForRedirectType) => {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }
return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
