import React from "react";
import s from "./User.module.css"
import userPhoto from "../../../Assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../types/types";


type UsersPropsType = {
    user: UserType
    followingInProgress: Array<number>;
    follow: (userId:number)=> void;
    unfollow: (userid: number) => void;
};

export const User: React.FC<UsersPropsType> = ({user, followingInProgress, follow, unfollow}) => {

    return (
        <div>
                        <span>
                            <div>

                                <NavLink to={'/profile/' + user.id}>
                                    <img className={s.userPhoto}
                                         src={user.photos.small !== null ? user.photos.small : userPhoto}
                                         alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button disabled={followingInProgress.some((id: number) => id === user.id)}
                                              onClick={() => {
                                                  unfollow(user.id)
                                              }}>Unfollow</button>
                                    : <button disabled={followingInProgress.some((id: number) => id === user.id)}
                                              onClick={() => {
                                                  follow(user.id)
                                              }}>Follow</button>}
                            </div>
                        </span>
            <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
        </div>
    )
}