import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state:any) => {
    return {
        messagePage: state.messagePage,
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

export default compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps), WithAuthRedirect)(Dialogs)