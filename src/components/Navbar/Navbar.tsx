import React from 'react';
import s from "./Navbar.module.css";

// let classes = {
//     'nav': "Navbar_nav__-NMgc",
//     'item': "Navbar_item__2wV3l",
// }


const Navbar = () => {
    return  <nav className={s.nav}>
        <div className={s.item}><a>Profile</a></div>
        <div className={`${s.item} ${s.active}`}><a>Messages</a></div>
        <div className={s.item}><a>News</a></div>
        <div className={s.item}><a>Music</a></div>
        <div className={s.item}><a>Settings</a></div>
    </nav>
}

export default Navbar