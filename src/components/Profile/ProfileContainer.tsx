import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import { withRouter} from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId=2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state:any)=> ({
    profile: state.profilePage.profile,
})

let withURLDataContainerComponent =  withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(withURLDataContainerComponent)