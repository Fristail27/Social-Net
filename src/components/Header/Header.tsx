import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css";

const Header = (props:any) => {
    return <header className={s.header}>
        <img
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=160x10000:format=png/path/s4ea002c0228cd3e1/image/i7a22a76b3f922789/version/1514917365/image.png"
            alt=""/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
}

export default Header