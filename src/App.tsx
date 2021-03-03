import React, {ComponentType, Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/login";
import {connect} from 'react-redux';
import {compose} from 'redux';
import Preloader from "./components/common/Preloader";
import {AppRootStateType} from "./redux/redux-store";
import {initializeAppTC} from "./redux/app-reducer";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const HeaderContainer = React.lazy(() => import("./components/Header/HeaderContainer"));

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
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <HeaderContainer/>
                        <Navbar/>
                        <div className="app-wrapper-content">
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/> {/* 1 вариант*/}
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/> {/* 2 вариант*/}
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>

                </div>
                    </Suspense>
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
