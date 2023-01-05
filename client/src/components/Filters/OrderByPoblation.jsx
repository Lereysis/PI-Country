import React from 'react'
import { useDispatch } from 'react-redux'
import { orderByPoblation } from '../../redux/actions'
import style from "./Filters.module.css"

 function OrderByPoblation() {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(orderByPoblation(e.target.value))
  } 
  return (
    <div className={style.select}>
        <select onChange={handleChange}>
            <option value="reset">Order by Population</option>
            <option value="minPopulation">Min Population</option>
            <option value="maxPopulation">Max Population</option>
        </select>
    </div>
  )
}

export default OrderByPoblation