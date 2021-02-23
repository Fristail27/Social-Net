import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string;
    updateStatus: (newStatus: string) => void
}
type ProfileStatusStateType = {
    editMode: boolean;
    status: string;
}

const ProfileStatus = (props: ProfileStatusPropsType) => {

    const initState: ProfileStatusStateType = {
        editMode: false,
        status: props.status
    }

    const [state, setState] = useState<ProfileStatusStateType>(initState)

    useEffect(()=> {
        if (state.status !== props.status) {
            setState({
                ...state,
                status: props.status
            })
        }
    },[props.status])

    const activateEditMode = () => {
        setState({
                ...state,
                editMode: true
            }
        )
    }
    const deActivateEditMode = () => {
        setState({
                ...state,
                editMode: false
            }
        )
        props.updateStatus(state.status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            status: e.currentTarget.value
        })
    }

    return (
        <div>
            {!state.editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "no-status"}</span>
            </div>}
            {state.editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode}
                       value={state.status}/>
            </div>}
        </div>
    )
}

export default ProfileStatus