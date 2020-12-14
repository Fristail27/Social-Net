import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionType,
    dialogsDataType,
    messagesDataType
} from "../../redux/state";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type dialogsContainerPropsType = {
    store: any,
};

const DialogsContainer = (props: dialogsContainerPropsType) => {
    let MessageChange = (text:string) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    };
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    return (
        <Dialogs updateNewMessageText={MessageChange} addMessage={addMessage} messagePage={props.store.getState().messagePage} />
    )
}

export default DialogsContainer;