import React from 'react';
import Header from './Header';
import axios from "axios";
import { connect } from 'react-redux';
import {AuthStateType, setAuthUserDataAC, setAuthUserDataActionType} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
    state:any,
    setAuthUserDataAC: (id:number, email:string, login:string)=>setAuthUserDataActionType
}

class HeaderContainer extends React.Component<any,HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials:true
        })
            .then(response => {
                if(response.data.resultCode ===0) {
                    const {id, email, login} = response.data.data
                    this.props.setAuthUserDataAC(id, email, login)
                }
            })
    }

    render(){
    return <Header {...this.props}/>
}}
const mapStateToProps = (state:AppRootStateType)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)