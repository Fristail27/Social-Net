import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    dialogsDataType,
    messagesDataType
} from "../../redux/state";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControl/formsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

type dialogsPropsType = {
    messagePage: any,
    addMessage: (n:string)=> void,
    isAuth:any
};

const Dialogs = (props: dialogsPropsType) => {

    let dialogElements = props.messagePage.dialogs.map((el :dialogsDataType) => {
        return <DialogItem key={el.id} name={el.name} id={el.id}/>
    });
    let messagesElements = props.messagePage.messages.map((mes :messagesDataType ) =>  <Message key={mes.id} message={mes.message}/>)
    let addNewMessage = (values:any) => {
        props.addMessage(values.newMessageText)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.adding}>
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

type FormDialogsType = {
    newMessageText: string;
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDialogsType>> = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[requiredField, maxLength50]} name="newMessageText" placeholder="Enter youe message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDialogsType>({form: "dialogsAddMessageForm",})(AddMessageForm)

export default Dialogs;