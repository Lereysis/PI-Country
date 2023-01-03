import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByPoblation } from '../../redux/actions'
import style from "./Filters.module.css"

 function OrderByPoblation() {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(orderByPoblation(e.target.value))
    console.log(e.target.value)
  } 
  return (
    <div className={style.select}>
        <select onChange={handleChange} name="countries" id="countries">
            <option value="">Order by Population</option>
            <option value="minPopulation">Min Population</option>
            <option value="maxPopulation">Max Population</option>
        </select>
    </div>
  )
}

export default OrderByPoblation