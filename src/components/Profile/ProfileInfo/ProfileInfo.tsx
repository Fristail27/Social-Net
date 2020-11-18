import React from 'react';
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props: any) => {
    return (
        <div>
            <div>
                <img src="https://caspian.travel/upload/tours/sulak_derbent/sul_derb_slide_1.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo