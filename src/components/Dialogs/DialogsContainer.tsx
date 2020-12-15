import React from "react";

import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store:any) => {
                let MessageChange = (text:string) => {
                    let action = updateNewMessageTextActionCreator(text);
                    store.dispatch(action);
                };
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };
                return (
                <Dialogs updateNewMessageText={MessageChange} addMessage={addMessage}
                         messagePage={store.getState().messagePage}/>)
            }}
            </StoreContext.Consumer>
        )
}

export default DialogsContainer;