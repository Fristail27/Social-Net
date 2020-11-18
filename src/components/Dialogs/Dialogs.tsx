import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = (props:any) => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + " " + s.active}>
                        Dimych
                    </div>
                    <div className={s.dialog}>
                        Andrey
                    </div>
                    <div className={s.dialog}>
                        Alex
                    </div>
                    <div className={s.dialog}>
                        Jason
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