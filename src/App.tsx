import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {postsType} from "./components/Profile/Profile";
import Dialogs, {dialogsDataType, messagesDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';

type appPropsType = {
    posts: Array<postsType>,
    dialogs: Array<dialogsDataType>,
    messages: Array<messagesDataType>,
}

function App(props: appPropsType) {

    let someComponent = () => <Dialogs dialogs={props.dialogs} messages={props.messages}/>

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" component={someComponent}/>  {/* 1 вариант*/}
                    <Route path="/profile" render={()=> <Profile posts={props.posts} />}/> {/* 2 вариант*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
