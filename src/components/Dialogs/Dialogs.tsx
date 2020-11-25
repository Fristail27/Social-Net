import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export type dialogsDataType = {
    id: number,
    name:string,
}

export type messagesDataType = {
    id: number,
    message: string,
}

type dialogsPropsType = {
    messages: Array<messagesDataType>,
    dialogs: Array<dialogsDataType>,
}

const Dialogs = (props: dialogsPropsType) => {

    let dialogElements = props.dialogs.map((el :dialogsDataType) => {
        return <DialogItem name={el.name} id={el.id}/>
    })
    let messagesElements = props.messages.map((mes :messagesDataType ) =>  <Message message={mes.message}/>)
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogElements}</div>
                <div className={s.messages}>{messagesElements}</div>
            </div>
        </div>
    )
}

export default Dialogs;