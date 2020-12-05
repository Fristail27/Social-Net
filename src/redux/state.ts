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
};
export type ActionType = {
    type: TypeActionType,
    newText?: string,
    newMessageText?: string,
};
type TypeActionType = typeof ADD_POST | typeof UPDATE_NEW_POST_TEXT | typeof ADD_MESSAGE | typeof UPDATE_NEW_MESSAGE_TEXT;
export type StoreType = {
    _state: StateType,
    _callSubscriber: (a? :StateType) => void,
    getState: () => StateType,
    subscribe: (a: (a: StateType) => void) => void,
    dispatch: (a: ActionType) => void,
};

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE=NEW-POST-TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

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
        if (action.type === ADD_POST) {
            let newPost: postsType = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText as string;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: this._state.messagePage.messages.length + 1,
                message: this._state.messagePage.newMessageText,
            };
            this._state.messagePage.messages.push(newMessage);
            this._state.messagePage.newMessageText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagePage.newMessageText = action.newMessageText as string;
            this._callSubscriber(this._state);
        }
    },

};
export const addPostActionCreator = () :ActionType => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string) :ActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});
export const addMessageActionCreator = () :ActionType => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text: string) :ActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text
});

export default store;