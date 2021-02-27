import React from "react";
import s from "./Paginator.module.css";

type UsersPropsType = {
    currentPage: number
    pageSize: number;
    totalUsersCount: number;
    onPageChanged: (pageNumber:number) => void;
};

export const Paginator: React.FC<UsersPropsType> = ({currentPage,
                                                        pageSize,
                                                        totalUsersCount,
                                                        onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map((p: number, i: number) => {
                return <span key={i} onClick={() => {
                    onPageChanged(p)
                }} className={currentPage === p ? s.selectedPage : undefined}>{p}</span>
            })}
        </div>)
}