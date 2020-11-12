import React from 'react';
import s from "./Post.module.css"

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://www.habarolog.ru/wp-content/uploads/2020/08/7a691959fc5f9859ea78237631313583.jpg" alt=""/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post