import React from "react";
import s from "./Users.module.css"

const Users = (props:any) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Haselmaus.JPG/240px-Haselmaus.JPG", followed: false, fullName: "Dmitry", status: "lol", location: {city: "Minsk", country:"Belarus"},},
            {id: 2, photoURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Haselmaus.JPG/240px-Haselmaus.JPG", followed: true, fullName: "Alex", status: "lol1", location: {city: "Moskow", country:"Russia"},},
            {id: 3, photoURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Haselmaus.JPG/240px-Haselmaus.JPG", followed: false, fullName: "ant", status: "lol2", location: {city: "Minsk", country:"Belarus"},},
        ])
    }

    return (
        <div>
            {props.users.map((u:any) => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img className={s.userPhoto} src={u.photoURL} alt=""/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Users