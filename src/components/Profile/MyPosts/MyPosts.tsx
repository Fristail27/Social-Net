import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props: any) => {

    let postData = [
        {id:1, post:"Hi/ How are you?", likesCount:12,},
        {id:2, post:"It second post", likesCount: 23,},
        {id:3, post:"It third post", likesCount: 23,},
        {id:4, post:"It four post", likesCount: 23,},
    ]

    let postElements = postData.map(p => <Post message={p.post} like={p.likesCount}/> )

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