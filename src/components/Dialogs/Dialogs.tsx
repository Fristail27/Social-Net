import React from "react";
import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const Dialogs = (props:any) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + " " + s.active}>
                        <NavLink to="/dialogs/1">Dimych</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/2">Andrey</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/3">Alex</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to="/dialogs/4">Jason</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Hi</div>
                    <div className={s.message}>How are you</div>
                    <div className={s.message}>lol</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;