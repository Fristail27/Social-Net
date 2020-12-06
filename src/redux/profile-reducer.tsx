export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE=NEW-POST-TEXT";

const profileReducer = (state: any, action: any): any => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText as string;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = ():any => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string):any => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;