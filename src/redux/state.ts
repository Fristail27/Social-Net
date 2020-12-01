import {postsType} from "../components/Profile/Profile";
import {dialogsDataType, messagesDataType} from "../components/Dialogs/Dialogs";

export type stateType = {
    profilePage: {
        posts: Array<postsType>,
        newPostText: string
    },
    messagePage: {
        messages: Array<messagesDataType>,
        dialogs: Array<dialogsDataType>,
    },
};
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE=NEW-POST-TEXT";

let store :any = {
    _state: {
        profilePage: {
            posts: [
                {id:1, post:"Hi/ How are you?", likesCount:12,},
                {id:2, post:"It second post", likesCount: 23,},
                {id:3, post:"It third post", likesCount: 23,},
                {id:4, post:"It four post", likesCount: 23,},],
            newPostText: "LOLOLOLO"
        },
        messagePage: {
            messages: [
                {id:1, message:"Hi",},
                {id:2, message:"How are you",},
                {id:3, message:"lol",},
            ],
            dialogs: [
                {id: 1, name: "Dimych",},
                {id: 2, name: "Andrey",},
                {id: 3, name: "Alex",},
                {id: 4, name: "Jason",},
            ],
        },

    },
    _callSubscriber () {},

    getState() {
        return this._state;
    },
    subscribe (observer :any) {this._callSubscriber = observer},

    dispatch (action :any) {
        // {type: "ADD-POST"}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },

};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text:string) => ({type: UPDATE_NEW_POST_TEXT, newText: text,});

export default store;