import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileAndProfileInfoPropsType} from "../../types/types";

const Profile:React.FC<ProfileAndProfileInfoPropsType> = (props) => {
    return <div>
        <ProfileInfo saveProfile={props.saveProfile} isOwner={props.isOwner} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
};

export default Profile;