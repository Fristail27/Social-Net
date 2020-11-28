import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { postsType } from '../Profile';

type myPostsPropsType = {
    posts: Array<postsType>,
}

const MyPosts = (props: myPostsPropsType) => {

    let postElements = props.posts.map((p: postsType) => <Post key={p.id} message={p.post} like={p.likesCount}/> )

    let newPostElement :any = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert("Hello");
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
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts