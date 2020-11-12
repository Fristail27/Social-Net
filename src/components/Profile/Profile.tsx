import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://caspian.travel/upload/tours/sulak_derbent/sul_derb_slide_1.jpg" alt=""/>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts/>
    </div>
}

export default Profile