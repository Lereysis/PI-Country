import React from "react";
import style from "../Nav/Nav.module.css"
import {Link} from "react-router-dom"
import logo from "../../assets/img/logo.png"



export default function Nav (){
    return (
        <nav className={style.navbar}>
            <div className={style.header}>
                <Link to="/"><img src={logo} alt="logo"/></Link>
            </div>
            <div className={style.buttonContent}>
                <Link to="/home" className={style.button}>Home</Link>
                <Link to="/create-activity" className={style.button}>Create an Activity</Link>
            </div>
        </nav>
    )
};