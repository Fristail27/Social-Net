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

    let dialogElements = dialogsData.map(el => {
        return <DialogItem name={el.name} id={el.id}/>
    })

    let messagesElements = messagesData.map(mes =>  <Message message={mes.message}/>)

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