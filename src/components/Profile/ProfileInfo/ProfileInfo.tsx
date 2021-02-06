import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://caspian.travel/upload/tours/sulak_derbent/sul_derb_slide_1.jpg" alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img className={s.photoLarge} src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={"hello my friends"}/>
            </div>
        </div>
    )
}

export default ProfileInfo