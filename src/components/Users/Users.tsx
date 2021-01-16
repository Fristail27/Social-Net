import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../Assets/images/user.jpg";

let Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((p: number, i:number) => {
                    return <span key={i} onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p ? s.selectedPage : undefined}>{p}</span>
                })}
            </div>
            {props.users.map((u: any) => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     alt=""/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
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
        </div>)
}

export default Users