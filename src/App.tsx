import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {ActionType, dialogsDataType, messagesDataType, postsType, StateType} from "./redux/state";

type appPropsType = {
    state: StateType,
    dispatch: (action :ActionType) => void,
}

function App(props: appPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs dispatch={props.dispatch} messagePage={props.state.messagePage}/> }/> {/* 1 вариант*/}
                <Route path="/profile"
                       render={() => <Profile dispatch={props.dispatch} profilePage={props.state.profilePage}/>}/> {/* 2 вариант*/}
            </div>
        </div>
    );
}

export default App;
