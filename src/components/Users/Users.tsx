import React from "react";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../Assets/images/user.jpg"

class Users extends React.Component<any, any> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <div>
                {this.props.users.map((u:any) => {
                    return (
                        <div key={u.id}>
                        <span>
                            <div>
                                <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={()=> {this.props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={()=> {this.props.follow(u.id)}}>Follow</button>}
                            </div>
                        </span>
                            <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users