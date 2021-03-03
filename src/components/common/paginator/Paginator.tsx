import React, {useState} from "react";
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
    let [portionNumber, setPortionNumber] = useState<number>(0)

    let portionSize = 10
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let firstNumPortion = (portionNumber)*portionSize +1
    let lastNumPortion = (portionNumber)*portionSize + portionSize
    let lastPortion = pagesCount/portionSize

    return (
        <div style={{padding:"5px"}}>
            {(portionNumber !== 0) &&<button onClick={() => setPortionNumber(0)} style={{display: "inline-block"}}>To start</button>}
            {portionNumber > 0 && <button onClick={()=>setPortionNumber(portionNumber - 1)} style={{display:"inline-block"}}>Prev.Page</button>}
            {pages.filter(p => p>=firstNumPortion && p<=lastNumPortion).map((p: number, i: number) => {
                return <span style={{margin:"0 2px", border: "1px solid black", padding:"2px"}} key={i} onClick={() => {
                    onPageChanged(p)
                }} className={currentPage === p ? s.selectedPage : undefined}>{p}</span>
            })}
            {(portionNumber!==lastPortion-1) && <button onClick={() => setPortionNumber(portionNumber+1 )} style={{display: "inline-block"}}>Next
                Page</button>}
            {(portionNumber !== lastPortion - 1) &&
            <button onClick={() => setPortionNumber(lastPortion - 1)} style={{display: "inline-block"}}>To end</button>}
        </div>)
}