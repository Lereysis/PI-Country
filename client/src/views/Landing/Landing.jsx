import React from 'react'
import fondo from "../../assets/img/fondo-landing-01.png"
import style from "./Landing.module.css"
import {Link} from "react-router-dom"
import icongithub from "../../assets/img/icon-github.gif"
import iconlinkedin from "../../assets/img/icon-linkedin-circled.gif"

export const Landing = () => {
  return (
    <div className={style.content}>
      <div className={style.contentLeft}>
        <h1 className={style.titulo}>Welcome to the Country Api</h1>
        <Link to="/home" className={style.button}>Visit</Link>
        <div className={style.socialMedia}>
            <a target="_blank" href='https://github.com/Lereysis'>
                <img src={icongithub} alt="icon github"/>
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/lereysis-quezada-814a2a21a/'>
                <img src={iconlinkedin} alt="icon linkedin"/>
            </a>
        </div>
      </div>
      <div className={style.contentRight}>
        <img className={style.imagendefondo} src={fondo} alt="ilustraciondepaises" />
      </div>
    </div>
  )
}

export default Landing;