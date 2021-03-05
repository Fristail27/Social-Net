import React from "react";
import { connect } from "react-redux";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField} from "../components/common/formsControl/formsControls";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../components/common/formsControl/formsControls.module.css"
import {AppRootStateType} from "../redux/redux-store";
import {requiredField} from "../utils/validators/validators";

type FormDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha:string
}

type LoginFormPropsType ={
    captchaUrl: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType> & LoginFormPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", null, null, [requiredField])}
            {createField("Password", "password", "password", null, [requiredField])}
            {createField(null, "rememberMe", "checkbox", "remember me", null)}
            {captchaUrl && <img style={{width:"150px"}} src={captchaUrl} alt=""/>}
            {captchaUrl && createField('Symbols from image', 'captcha', null, null, [requiredField])}
            {error
            ?<div className={s.formSummaryError}>
                    {error}
                </div>
            : ""}
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}
//@ts-ignore
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    captchaUrl: string
    isAuth:boolean;
}

type MapDispatchPropsType = {
    login: (email:string, password:string, rememberMe:boolean, captcha: string) => void;
}
type LoginPropsType = MapStatePropsType & MapDispatchPropsType

const Login: React.FC<LoginPropsType> = ({isAuth, login, captchaUrl}) => {
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    const onSubmit = (formData: FormDataType) => {
        let { email, password, rememberMe, captcha } = formData
        login(email, password, rememberMe, captcha)
    }
    return (
        <div>
            <h1>Login</h1>
            {/*//@ts-ignore*/}
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
        </div>

    )
}

const mapStateToProps = (state:AppRootStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
//@ts-ignore
export default connect(mapStateToProps, {login})(Login)