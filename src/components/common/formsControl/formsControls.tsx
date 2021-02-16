import React from "react";
import s from "./formsControls.module.css"

const FormControl: React.FC<any> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
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