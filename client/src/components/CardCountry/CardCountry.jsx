import React from 'react'
import { Link } from 'react-router-dom'
import style from "./CardCountry.module.css"

const CardCountry = (props) => {
  const {name, image, id, continents } = props
  return (
    <>
        <Link to={`/country/${id}`}>
          <div className={style.card}>
              <img src={image} width="150" height="150" alt={name} />
              <div className={style.cardInfo}>
                <h1>{name}</h1>
                <h3>{continents}</h3>
              </div>
          </div>
        </Link>
    </>
    
  )
}

export default CardCountry;