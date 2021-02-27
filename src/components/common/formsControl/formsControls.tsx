import React from "react";
import s from "./formsControls.module.css"
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({ meta:{touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
};

export const Input: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}

export const createField = (placeholder:string|null, name:string, type:string|null, text:string|null, validate: Array<any>|null )=> {

    const valid = validate && {validate};

    return (<div>
        <Field placeholder={placeholder} name={name} component={Input} type={type} {...valid}/> {text}
    </div>)
}