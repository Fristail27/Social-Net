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
            <div className={s.posts}>
                <Post message={postData[0].post} like={postData[0].likesCount}/>
                <Post message="It second post" like={10}/>
                <Post message="It third post" like={15}/>
                <Post message="It four post" like={20}/>
            </div>
        </div>
    )
}

export default MyPosts