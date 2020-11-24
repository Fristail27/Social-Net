import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type postsType = {
    id: number,
    post: string,
    likesCount: number,
};

type profilePropsType = {
    posts: Array<postsType>
};

const Profile = (props: profilePropsType) => {
    return <div>
        <ProfileInfo />
        <MyPosts posts={props.posts}/>
    </div>
};

export default Profile;