import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {ActionType, dialogsDataType, messagesDataType, postsType, StateType} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type appPropsType = {
    state: StateType,
    dispatch: (action :ActionType) => void,
    store:any,
}

function App(props: appPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer store={props.store} /> }/> {/* 1 вариант*/}
                <Route path="/profile"
                       render={() => <Profile store={props.store} />}/> {/* 2 вариант*/}
            </div>
        </div>
    );
}

export default App;
