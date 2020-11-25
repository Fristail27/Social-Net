import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {postsType} from "./components/Profile/Profile";
import Dialogs, {dialogsDataType, messagesDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {stateType} from "./redux/state";

type appPropsType = {
    state: {
        profilePage: {
            posts: Array<postsType>,
        },
        messagePage: {
            messages: Array<messagesDataType>,
            dialogs: Array<dialogsDataType>,
        },
    }
}

function App(props: appPropsType) {

    let someComponent = () => <Dialogs dialogs={props.state.messagePage.dialogs} messages={props.state.messagePage.messages}/>

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" component={someComponent}/>  {/* 1 вариант*/}
                    <Route path="/profile" render={()=> <Profile posts={props.state.profilePage.posts} />}/> {/* 2 вариант*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
