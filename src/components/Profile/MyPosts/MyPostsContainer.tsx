import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state:any) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch:any) => {
        return {
            addPostClick: () => {
                dispatch(addPostActionCreator())
            },
            updateNewPostTextActionCreator: (text: string) => {
                dispatch(updateNewPostTextActionCreator(text));
        }
}}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;