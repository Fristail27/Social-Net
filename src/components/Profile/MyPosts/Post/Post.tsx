import React from 'react';
import s from "./Post.module.css"

type PostType = {
    message: string,
    like: number,
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src="https://www.habarolog.ru/wp-content/uploads/2020/08/7a691959fc5f9859ea78237631313583.jpg" alt=""/>
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
        </div>
    )
}

export default Post