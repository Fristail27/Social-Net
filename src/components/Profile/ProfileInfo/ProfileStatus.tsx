import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string;
    updateStatus: (newStatus:string) => void
}
type ProfileStatusStateType = {
    editMode: boolean;
    status: string;
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }
    deActivateEditMode =() =>{
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }
    //@ts-ignore
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })

    }
    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusStateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "no-status"}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus