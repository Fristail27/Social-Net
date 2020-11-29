import {postsType} from "../components/Profile/Profile";
import {dialogsDataType, messagesDataType} from "../components/Dialogs/Dialogs";
import {rerenderEntireTree} from "../render";

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

let state :stateType = {
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

};

export let addPost = () => {
    let newPost = {
        id:5,
        post: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText :string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;