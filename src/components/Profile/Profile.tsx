import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPost} from "../../redux/state";

export type postsType = {
    id: number,
    post: string,
    likesCount: number,
};

type profilePropsType = {
    posts: Array<postsType>,
    addPost: (post:string) => void,
};

const Profile = (props: profilePropsType) => {
    return <div>
        <ProfileInfo />
        <MyPosts addPost={props.addPost} posts={props.posts}/>
    </div>
};

export default Profile;