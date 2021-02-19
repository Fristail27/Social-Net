import React, {ComponentType} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/login";
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from "./components/common/Preloader";
import {AppRootStateType} from "./redux/redux-store";
import {initializeAppTC} from "./redux/app-reducer";

type AppPropsType = {
    initializeAppTC: () => void;
    initialized: boolean
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }
    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/> {/* 1 вариант*/}
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/> {/* 2 вариант*/}
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state: AppRootStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App)

export default AppContainer
