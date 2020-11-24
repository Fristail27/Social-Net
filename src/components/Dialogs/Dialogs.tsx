import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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