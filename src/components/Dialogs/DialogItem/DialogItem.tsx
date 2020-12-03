import React, {useState} from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string,
    id: number,
}

const DialogItem = function (props: DialogItemType) {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;