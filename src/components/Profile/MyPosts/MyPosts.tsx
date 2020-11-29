import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { postsType } from '../Profile';
import {addPost} from "../../../redux/state";

type myPostsPropsType = {
    profilePage: any,
    addPost: () => void,
    updateNewPostText: (text :string) => void,
}

const MyPosts = (props: myPostsPropsType) => {

    let postElements = props.profilePage.posts.map((p: postsType) => <Post key={p.id} message={p.post} like={p.likesCount}/> )

    let newPostElement :any = React.createRef();
    let addPostClick = () => {
        props.addPost();
    }

    let onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                new post
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPostClick}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts