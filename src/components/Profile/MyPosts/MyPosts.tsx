import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { postsType } from '../Profile';

type myPostsPropsType = {
    posts: Array<postsType>,
}

const MyPosts = (props: myPostsPropsType) => {

    let postElements = props.posts.map((p: postsType) => <Post message={p.post} like={p.likesCount}/> )

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                new post
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{postElements}</div>
        </div>
    )
}

export default MyPosts