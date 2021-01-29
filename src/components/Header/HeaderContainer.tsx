import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {getAuthUserData, setAuthUserDataAC, setAuthUserDataActionType} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

type HeaderContainerPropsType = {
    state:any,
    setAuthUserDataAC: (id:number, email:string, login:string)=>setAuthUserDataActionType
}

class HeaderContainer extends React.Component<any,HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render(){
    return <Header {...this.props}/>
}}
const mapStateToProps = (state:AppRootStateType)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)