import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";

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
    getUserProfile: (userId:number) => void
    getStatus: (userId:number) => void
    updateStatus: (status:string) => void
}
type OwnComponentPropsType = MapStateToPropsType & MapDispatchToProps
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnComponentPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId=this.props.authorizedUserId.toString()
            if (!userId) {
                this.props.history.push("/login")
            }
        }

        this.props.getUserProfile(userId as any)
        this.props.getStatus(userId as any)
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
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
