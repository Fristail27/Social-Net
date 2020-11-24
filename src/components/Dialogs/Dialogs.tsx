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
    let dialogsData = [
        {id: 1, name: "Dimych",},
        {id: 2, name: "Andrey",},
        {id: 3, name: "Alex",},
        {id: 4, name: "Jason",},
    ];
    let messagesData = [
        {id:1, message:"Hi",},
        {id:2, message:"How are you",},
        {id:3, message:"lol",},
    ];
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name="Andrey" id={2}/>
                    <DialogItem name="Alex" id={3}/>
                    <DialogItem name="Jason" id={4}/>
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message="How are you"/>
                    <Message message="lol"/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;