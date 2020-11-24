import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {postsType} from "./components/Profile/Profile";
import {dialogsDataType, messagesDataType} from "./components/Dialogs/Dialogs";

let posts :Array<postsType> = [
    {id:1, post:"Hi/ How are you?", likesCount:12,},
    {id:2, post:"It second post", likesCount: 23,},
    {id:3, post:"It third post", likesCount: 23,},
    {id:4, post:"It four post", likesCount: 23,},
]
let dialogsData :Array<dialogsDataType> = [
    {id: 1, name: "Dimych",},
    {id: 2, name: "Andrey",},
    {id: 3, name: "Alex",},
    {id: 4, name: "Jason",},
];
let messagesData :Array<messagesDataType> = [
    {id:1, message:"Hi",},
    {id:2, message:"How are you",},
    {id:3, message:"lol",},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
