import React, {ChangeEvent, useState} from 'react';
import s from "./ProfileInfo.module.css"
import userPhoto from "../../../Assets/images/user.jpg"
import Preloader from "../../common/Preloader";
import ProfileStatus from './ProfileStatus';
import {ProfileAndProfileInfoPropsType, ProfileType} from "../../../types/types";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo: React.FC<ProfileAndProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelector = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            if (e.target.files.length) {
                savePhoto(e.target.files[0])
            }
        }
    }

    const onSubmit = (formData:any) => {
        const promise = saveProfile(formData)
        promise.then(()=> setEditMode(false))
    }

    return (
        <div className={s.descriptionBlock}>
            <img className={s.photoLarge} src={profile.photos.large as string || userPhoto} alt=""/>
            {isOwner && <input onChange={onMainPhotoSelector} type={"file"}/>}
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData goToEditMode={() => {setEditMode(true)}} isOwner={isOwner} profile={profile}/>}

        </div>
    )
}
type ContactType = {
    contactTitle: string | null
    contactValue: string | null
}
type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}


const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    return (<div>
            <button onClick={goToEditMode}>Edit Mode</button>
            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
            </div>
            <div>
                <b>About Me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
            <div>
                {Object.entries(profile.contacts).map((el) => {
                    return <Contact key={el[0]} contactTitle={el[0]} contactValue={el[1]}/>
                })}
            </div>
        </div>
    )
}

const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo