import React from "react";
import preloader from "../../Assets/images/25.svg";

const Preloader = (props:any) => {
    return (
        <div>
            <img style={{width:100,}} src={preloader}/>
        </div>
    )
}

export default Preloader