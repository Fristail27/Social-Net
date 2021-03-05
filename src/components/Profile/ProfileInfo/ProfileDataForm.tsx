import {ProfileType} from "../../../types/types";
import React from "react";
import {createField, Input} from "../../common/formsControl/formsControls";
import {Field, Form, reduxForm} from "redux-form";
import s from "../../common/formsControl/formsControls.module.css";

type ProfileDataFormType = {
    profile: ProfileType
    onSubmit: ()=> void
}

const ProfileDataForm: React.FC<any> = ({profile, handleSubmit, error}) => {
    return (
            <form onSubmit={handleSubmit}>
                <button>Save</button>
                {error
                    ?<div className={s.formSummaryError}>
                        {error}
                    </div>
                    : ""}
                <div>
                    <b>Full name:</b> {createField('Full name', 'fullName', null, null, null)}
                </div>
                <div>
                    <b>Looking for a job:</b><Field name='lookingForAJob' component={Input} type='checkbox'/>
                </div>
                <div>
                    <b>About Me:</b> {createField('About Me', 'aboutMe', null, null, null)}
                </div>
                <div>
                    <b>Looking for a job description:</b> {createField('Looking for a job description', 'lookingForAJobDescription', null, null, null)}
                </div>
                <div>
                    <b>Contacts:</b>{Object.entries(profile.contacts).map((el) => {
                        return (
                            <div key={el[0]}>
                                <b>{el[0]}: {createField(el[0], 'contacts.'+el[0], null, null, null)}</b>
                            </div>
                            )
                    })}
                </div>
            </form>
    )
}

const ProfileDataFormReduxForm:any = reduxForm<any>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm