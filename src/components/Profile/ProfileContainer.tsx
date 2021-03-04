import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profile-reducer";
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
    savePhoto: (file:any) => string
}
type OwnComponentPropsType = MapStateToPropsType & MapDispatchToProps
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnComponentPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile () {
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
            />
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
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter
)(ProfileContainer)
