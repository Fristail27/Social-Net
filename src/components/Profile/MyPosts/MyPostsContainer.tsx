import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
    <StoreContext.Consumer>
        {(store: any) => {
            let addPostClick = () => {
                store.dispatch(addPostActionCreator());
            };
            let onPostChange = (text: string) => {
                let action = updateNewPostTextActionCreator(text);
                store.dispatch(action);
            };
            return (
                <MyPosts profilePage={store.getState().profilePage}
                         addPostClick={addPostClick}
                         updateNewPostTextActionCreator={onPostChange}/>)
        }}
    </StoreContext.Consumer>)
}

export default MyPostsContainer;