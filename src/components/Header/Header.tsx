import React, {ReactNode} from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css";

type HeaderPropsType = {
    getAuthUserData: ()=> void;
    isAuth: boolean;
    login: string | null;
    logout: ()=> void;
}

const Header = (props:any) => {
    return <header className={s.header}>
        <img
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=160x10000:format=png/path/s4ea002c0228cd3e1/image/i7a22a76b3f922789/version/1514917365/image.png"
            alt=""/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
}

export default Header