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
    profilePage: any,
    dispatch: (action :object) => void,
};

const Profile = (props: profilePropsType) => {
    return <div>
        <ProfileInfo />
        <MyPosts dispatch={props.dispatch} profilePage={props.profilePage}/>
    </div>
};

export default Profile;