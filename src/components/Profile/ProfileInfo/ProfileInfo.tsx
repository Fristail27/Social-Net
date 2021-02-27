import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader";
import ProfileStatus from './ProfileStatus';
import {ProfileAndProfileInfoPropsType} from "../../../types/types";

const ProfileInfo:React.FC<ProfileAndProfileInfoPropsType> = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://caspian.travel/upload/tours/sulak_derbent/sul_derb_slide_1.jpg" alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img className={s.photoLarge} src={profile.photos.large as string} alt=""/>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo