import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Post from "./Post";


export default {
    title: 'Post',
    component: Post,
} as Meta;



export const onePost = () => { return <Post message="Djyhhf" like={23} />};
