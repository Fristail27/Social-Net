import React from "react";

class ProfileStatus extends React.Component<any, any> {
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
    onStatusChange = (e) => {
        console.log(e.currentTarget.value)
        this.setState({
            status: e.currentTarget.value
        })

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