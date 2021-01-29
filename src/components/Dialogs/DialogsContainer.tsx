import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state:any) => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth
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