import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer /> }/> {/* 1 вариант*/}
                <Route path="/profile"
                       render={() => <Profile  />}/> {/* 2 вариант*/}
            </div>
        </div>
    );
}

export default App;
