import React, {ChangeEvent, useState} from 'react';
import s from "./ProfileInfo.module.css"
import userPhoto from "../../../Assets/images/user.jpg"
import Preloader from "../../common/Preloader";
import ProfileStatus from './ProfileStatus';
import {ProfileAndProfileInfoPropsType} from "../../../types/types";

const ProfileInfo: React.FC<ProfileAndProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelector = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files){
            if (e.target.files.length) {
                savePhoto(e.target.files[0])
            }
        }

    }

    return (
        <div className={s.descriptionBlock}>
            <img className={s.photoLarge} src={profile.photos.large as string || userPhoto} alt=""/>
            {isOwner && <input onChange={onMainPhotoSelector} type={"file"}/>}
            <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>
    )
}

export default ProfileInfo