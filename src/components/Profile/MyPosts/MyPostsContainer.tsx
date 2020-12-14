import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionType, postsType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type myPostsContainerPropsType = {
    store: any,
};



const MyPostsContainer = (props: myPostsContainerPropsType) => {
    let addPostClick = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let onPostChange = (text:string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };
    return (
        < MyPosts profilePage={props.store.getState().profilePage} addPostClick={addPostClick} updateNewPostTextActionCreator={onPostChange} />
    )
}

export default MyPostsContainer;