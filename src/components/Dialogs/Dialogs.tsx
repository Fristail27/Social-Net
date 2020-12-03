import React, {ChangeEvent, useState} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

export type dialogsDataType = {
    id: number,
    name:string,
}

export type messagesDataType = {
    id: number,
    message: string,
}

type dialogsPropsType = {
    messagePage: any,
    dispatch: (action :object) => void,
}

const Dialogs = (props: dialogsPropsType) => {

    let dialogElements = props.messagePage.dialogs.map((el :dialogsDataType) => {
        return <DialogItem key={el.id} name={el.name} id={el.id}/>
    })
    let messagesElements = props.messagePage.messages.map((mes :messagesDataType ) =>  <Message key={mes.id} message={mes.message}/>)

    let newMessageElement :any = React.createRef();

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
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
                        <div>
                            <textarea value={props.messagePage.newMessageText} ref={newMessageElement} onChange={onMessageChange}></textarea>
                        </div>
                        <div>
                            <button onClick={addMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;