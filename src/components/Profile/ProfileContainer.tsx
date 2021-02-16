import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import { withRouter} from "react-router-dom";
import {compose} from "redux";
import {AppRootStateType} from "../../redux/redux-store";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId=this.props.authorizedUserId
        }

        this.props.getUserProfile(userId) // timeout что бы убрать баг с отрисовкой пустого инпута статуса после перезагрузки страницы
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}/>
        )
    }
}

let mapStateToProps = (state:AppRootStateType)=> ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)
