import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionType,
    dialogsDataType,
    messagesDataType
} from "../../redux/state";

type dialogsPropsType = {
    messagePage: any,
    addMessage: ()=> void,
    updateNewMessageText: (text:string)=> void,
};

const Dialogs = (props: dialogsPropsType) => {

    let dialogElements = props.messagePage.dialogs.map((el :dialogsDataType) => {
        return <DialogItem key={el.id} name={el.name} id={el.id}/>
    });
    let messagesElements = props.messagePage.messages.map((mes :messagesDataType ) =>  <Message key={mes.id} message={mes.message}/>)
    let onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewMessageText(text);
    };
    let onaAddMessage = () => {
        props.addMessage()
    };
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
                            <textarea value={props.messagePage.newMessageText} onChange={onMessageChange}></textarea>
                        </div>
                        <div>
                            <button onClick={onaAddMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;