import profileReducer, {ADD_POST, UPDATE_NEW_POST_TEXT} from "./profile-reducer";
import dialogsReducer, {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type postsType = {
    id: number,
    post: string,
    likesCount: number,
};
export type messagesDataType = {
    id: number,
    message: string,
};
export type dialogsDataType = {
    id: number,
    name: string,
};
export type StateType = {
    profilePage: {
        posts: Array<postsType>,
        newPostText: string,
    },
    messagePage: {
        messages: Array<messagesDataType>,
        dialogs: Array<dialogsDataType>,
        newMessageText: string,
    },
    sidebarPage: {

    },
};
export type ActionType = {
    type: TypeActionType,
    newText?: string,
    newMessageText?: string,
};
type TypeActionType =
    typeof ADD_POST
    | typeof UPDATE_NEW_POST_TEXT
    | typeof ADD_MESSAGE
    | typeof UPDATE_NEW_MESSAGE_TEXT;
export type StoreType = {
    _state: StateType,
    _callSubscriber: (a?: StateType) => void,
    getState: () => StateType,
    subscribe: (a: (a: StateType) => void) => void,
    dispatch: (a: ActionType) => void,
};


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi/ How are you?", likesCount: 12,},
                {id: 2, post: "It second post", likesCount: 23,},
                {id: 3, post: "It third post", likesCount: 23,},
                {id: 4, post: "It four post", likesCount: 23,},],
            newPostText: ""
        },
        messagePage: {
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
        },
        sidebarPage: {},
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.messagePage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state);
    }
};

export default store;