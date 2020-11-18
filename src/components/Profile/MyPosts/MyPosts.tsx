import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props: any) => {
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
                <Post message="Hi/ How are you?" like={5}/>
                <Post message="It second post" like={10}/>
                <Post message="It third post" like={15}/>
                <Post message="It four post" like={20}/>
            </div>
        </div>
    )
}

export default MyPosts