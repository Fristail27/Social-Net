import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string,
    id: number,
}

type MessageType = {
    message: string,
}

const DialogItem = function (props: DialogItemType) {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = function (props: MessageType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props: any) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name="Dimych" id={1}/>
                    <DialogItem name="Andrey" id={2}/>
                    <DialogItem name="Alex" id={3}/>
                    <DialogItem name="Jason" id={4}/>
                </div>
                <div className={s.messages}>
                    <Message message="Hi"/>
                    <Message message="How are you"/>
                    <Message message="lol"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;