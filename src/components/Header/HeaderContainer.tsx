import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {getAuthUserData, logout, SetAuthUserDataActionType} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
    state:any,
    setAuthUserDataAC: (id:number, email:string, login:string)=>SetAuthUserDataActionType
}

class HeaderContainer extends React.Component<any,HeaderContainerPropsType> {
    render(){
    return <Header {...this.props}/>
}}
const mapStateToProps = (state:AppRootStateType)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {logout})(HeaderContainer)