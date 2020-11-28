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
        return <DialogItem key={el.id} name={el.name} id={el.id}/>
    })
    let messagesElements = props.messages.map((mes :messagesDataType ) =>  <Message key={mes.id} message={mes.message}/>)

    let newMessageElement :any = React.createRef();

    let addMessage = () => {
        console.log("123");
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
                            <textarea ref={newMessageElement}></textarea>
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