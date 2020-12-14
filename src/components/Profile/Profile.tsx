import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type profilePropsType = {
    store:any,
};

const Profile = (props: profilePropsType) => {
    return <div>
        <ProfileInfo />
        <MyPostsContainer store={props.store}/>
    </div>
};

export default Profile;