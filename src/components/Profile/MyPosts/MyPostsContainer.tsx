import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionType, StateType} from "../../../redux/state";

let mapStateToProps = (state: StateType) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPostClick: (newPost:string) => {
            dispatch(addPostActionCreator(newPost))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;