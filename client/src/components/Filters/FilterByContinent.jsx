import React, { useEffect, useState } from 'react'
import { filterByContinent, getAllCountries } from '../../redux/actions';
import {useDispatch, useSelector} from "react-redux"
import style from "./Filters.module.css"

export const FilterByContinent = () => {
    
    const countries = useSelector(state => state.countries)
    const dispatch = useDispatch()

    const [currentPage,setCurrentPage] = useState(0)

    useEffect(()=>{
        dispatch(getAllCountries());
    },[dispatch])

    function handleFilterContinent(e) {
        dispatch(filterByContinent(e.target.value))
        setCurrentPage(1);
      }

  return (
    <div className={style.select} >
    <select onClick={(e) => handleFilterContinent(e)}>
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
