import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {postsType} from "./components/Profile/Profile";
import Dialogs, {dialogsDataType, messagesDataType} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {addPost, stateType} from "./redux/state";

type appPropsType = {
    state: {
        profilePage: {
            posts: Array<postsType>,
        },
        messagePage: {
            messages: Array<messagesDataType>,
            dialogs: Array<dialogsDataType>,
        },
    },
    addPost: () => void,
    updateNewPostText: (text :string) => void,
}

function App(props: appPropsType) {

    let someComponent = () => <Dialogs dialogs={props.state.messagePage.dialogs}
                                       messages={props.state.messagePage.messages}/>

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" component={someComponent}/> {/* 1 вариант*/}
                <Route path="/profile"
                       render={() => <Profile addPost={props.addPost} updateNewPostText={props.updateNewPostText} profilePage={props.state.profilePage}/>}/> {/* 2 вариант*/}
            </div>
        </div>

    );
}

export default App;
