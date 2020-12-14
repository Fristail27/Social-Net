import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionType, postsType} from "../../../redux/state";

type myPostsPropsType = {
    profilePage: any,
    addPostClick: () => void,
    updateNewPostTextActionCreator:(text:string) => void,
};



const MyPosts = (props: myPostsPropsType) => {

    let postElements = props.profilePage.posts.map((p: postsType) => <Post key={p.id} message={p.post} like={p.likesCount}/> )

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let onAddPostClick = () => {
        props.addPostClick();
    };

    let onPostChange = () => {
        let text = newPostElement.current?.value as string;
        props.updateNewPostTextActionCreator(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                new post
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPostClick}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts