import React from "react";
import { connect } from "react-redux";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../components/common/formsControl/formsControls";
import {requiredField} from "../utils/validators/validators";
import {login} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../components/common/formsControl/formsControls.module.css"

type FormDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField]} placeholder={"Email"} name={"email"} component={Input}/>
            </div>
            <div>
                <Field validate={[requiredField]} type={"password"} placeholder={"Password"} name={"password"} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            {props.error
            ?<div className={s.formSummaryError}>
                    {props.error}
                </div>
            : ""}
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    login: (email:string, password:string, rememberMe:boolean) => void;
    isAuth: boolean;
}

const Login = (props:LoginPropsType) => {
    debugger

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    const onSubmit = (formData: FormDataType) => {
        let { email, password, rememberMe } = formData
        console.log(formData)
        props.login(email, password, rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

const mapStateToProps = (state:any) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)