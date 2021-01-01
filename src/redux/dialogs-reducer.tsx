import {ActionType} from "./state";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
    messages: [
        {id: 1, message: "Hi",},
        {id: 2, message: "How are you",},
        {id: 3, message: "lol",},
    ],
    dialogs: [
        {id: 1, name: "Dimych",},
        {id: 2, name: "Andrey",},
        {id: 3, name: "Alex",},
        {id: 4, name: "Jason",},
    ],
    newMessageText: "",
};

const dialogsReducer = (state: any = initialState, action: ActionType): any => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    message: state.newMessageText
                }],
                newMessageText: ""
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        default:
            return state;
    }
};

export const addMessageActionCreator = (): ActionType => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text: string): ActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text
});

export default dialogsReducer;