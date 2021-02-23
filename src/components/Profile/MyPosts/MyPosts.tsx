import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {postsType} from "../../../redux/state";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import {Textarea} from "../../common/formsControl/formsControls";

const MyPosts = (props: any) => {

    let postElements = props.profilePage.posts.map((p: postsType) => <Post key={p.id} message={p.post} like={p.likesCount}/> )
    let onAddPostClick = (value:any) => {
        props.addPostClick(value.newPostText);
    };
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                new post
                <AddNewPostFormRedux onSubmit={onAddPostClick}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

type FormPostType = {
    newPostText: string;
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} validate={[requiredField, maxLength10]} placeholder={"Post message"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm<FormPostType>({form: "profileNewPostForm"})(AddNewPostForm)

export default MyPosts