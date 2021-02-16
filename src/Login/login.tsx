import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { authAPI } from "../api/api";
import {Input} from "../components/common/formsControl/formsControls";
import {requiredField} from "../utils/validators/validators";

type FormDataType = {
    login: string;
    password: string;
    rememberMe: boolean;
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField]} placeholder={"Login"} name={"login"} component={Input}/>
            </div>
            <div>
                <Field validate={[requiredField]} placeholder={"Password"} name={"password"} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        let { login, password, rememberMe } = formData
        console.log(formData)
        authAPI.login(login, password)
            .then(res=>console.log(res))
            .catch((err)=> console.log(err))
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}


export default Login