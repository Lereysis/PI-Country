import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { filterByContinent } from '../../redux/actions';
import style from "./Filters.module.css"

export const FilterByContinent = () => {
  
    const dispatch = useDispatch()
    function handleFilterContinent(e) {
        dispatch(filterByContinent(e.target.value))
    }

  return (
    <div className={style.select} >
    <select onClick={(e) => handleFilterContinent(e)}>
        <option value='All'>All</option>
        <option value='Europe'>Europe</option>
        <option value='Asia'>Asia</option>
        <option value='North America'>North America</option>
        <option value='South America'>South America</option>
        <option value='Africa'>Africa</option>
        <option value='Oceania'>Oceania</option>
        <option value='Antarctica'>Antartida</option>
    </select>
    </div>
  )
}
