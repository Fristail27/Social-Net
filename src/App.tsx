import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/login";

function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer /> }/> {/* 1 вариант*/}
                <Route path="/profile/:userId?" render={() => <ProfileContainer  />}/> {/* 2 вариант*/}
                <Route path="/users" render={() => <UsersContainer/> }/>
                <Route path="/login" render={() => <Login/> }/>
            </div>
        </div>
    );
}

export default App;
