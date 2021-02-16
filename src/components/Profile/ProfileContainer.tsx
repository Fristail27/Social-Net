import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {AppRootStateType} from "../../redux/redux-store";

type  PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileType;
    status: string;
    authorizedUserId: number;
    isAuth: boolean;
}
type MapDispatchToProps = {
    getUserProfile: (userId:string) => void
    getStatus: (userId:string) => void
    updateStatus: (status:string) => void
}
type OwnComponentPropsType = MapStateToPropsType & MapDispatchToProps
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnComponentPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId="13250"
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
