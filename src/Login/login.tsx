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
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", null, null, [requiredField])}
            {createField("Password", "password", "password", null, [requiredField])}
            {createField(null, "rememberMe", "checkbox", "remember me", null)}
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

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    isAuth:boolean;
}

type MapDispatchPropsType = {
    login: (email:string, password:string, rememberMe:boolean) => void;
}
type LoginPropsType = MapStatePropsType & MapDispatchPropsType

const Login: React.FC<LoginPropsType> = ({isAuth, login}) => {
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    const onSubmit = (formData: FormDataType) => {
        let { email, password, rememberMe } = formData
        login(email, password, rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

const mapStateToProps = (state:AppRootStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)