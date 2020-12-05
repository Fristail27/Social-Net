import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionType} from "../../redux/state";

type profilePropsType = {
    profilePage: any,
    dispatch: (action :ActionType) => void,
};

const Profile = (props: profilePropsType) => {
    return <div>
        <ProfileInfo />
        <MyPosts dispatch={props.dispatch} profilePage={props.profilePage}/>
    </div>
};

export default Profile;