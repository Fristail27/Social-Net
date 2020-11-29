import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { postsType } from '../Profile';
import {addPost} from "../../../redux/state";

type myPostsPropsType = {
    posts: Array<postsType>,
    addPost: (post :string) => void,
}

const MyPosts = (props: myPostsPropsType) => {

    let postElements = props.posts.map((p: postsType) => <Post key={p.id} message={p.post} like={p.likesCount}/> )

    let newPostElement :any = React.createRef();
    let addPostClick = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                new post
                <div>
                    <textarea ref={newPostElement}></textarea>
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