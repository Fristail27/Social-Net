import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/state";

let mapStateToProps = (state:StateType) => {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch: (a:any)=>void) => {
    return {
        updateNewMessageText: (text:string) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;