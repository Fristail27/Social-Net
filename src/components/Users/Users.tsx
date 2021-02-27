import React from "react";
import {UserType} from "../../types/types";
import { Paginator } from "../common/paginator/Paginator";
import { User } from "./user/User";

type UsersPropsType = {
    currentPage: number
    followingInProgress: Array<number>;
    pageSize: number;
    totalUsersCount: number;
    users: Array<UserType>;
    onPageChanged: (pageNumber:number) => void;
    follow: (userId:number)=> void;
    unfollow: (userid: number) => void;
};

const Users: React.FC<UsersPropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, follow, unfollow, followingInProgress, users}) => {

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            {users.map((u: UserType) => {
                return (
                    <User key={u.id} follow={follow} unfollow={unfollow} followingInProgress={followingInProgress} user={u}/>
                )
            })}
        </div>)
}

export default Users