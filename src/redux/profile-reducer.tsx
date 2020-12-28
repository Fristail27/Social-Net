import {ActionType} from "./state";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE=NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, post: "Hi/ How are you?", likesCount: 12,},
        {id: 2, post: "It second post", likesCount: 23,},
        {id: 3, post: "It third post", likesCount: 23,},
        {id: 4, post: "It four post", likesCount: 23,},],
    newPostText: ""
};

const profileReducer = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = "";
            return stateCopy;
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText as string;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = ():ActionType => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string):ActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;