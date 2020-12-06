export const ADD_MESSAGE = "ADD_MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const dialogsReducer = (state: any, action: any): any => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText as string;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = (): any => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text: string): any => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text
});

export default dialogsReducer;