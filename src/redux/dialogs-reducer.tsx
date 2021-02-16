import {ActionType} from "./state";

export const ADD_MESSAGE = "ADD_MESSAGE";

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
};

const dialogsReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    message: action.newMessage
                }],
            }
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessage:string): any => ({type: ADD_MESSAGE, newMessage});

export default dialogsReducer;