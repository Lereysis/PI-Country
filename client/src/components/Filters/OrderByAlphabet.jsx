import React from 'react'
import style from "./Filters.module.css"
import { useDispatch } from 'react-redux'
import { orderByAlphabet } from '../../redux/actions'


const OrderByAlphabet = () => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(orderByAlphabet(e.target.value))

  } 
  return (
    <div className={style.select}>
        <select onChange={handleChange} name="countries" id="countries">
            <option value="">Order by Alphabet</option>
            <option value="AZ">A - Z</option>
            <option value="ZA">Z - A</option>
        </select>
    </div>
  )
}

export default OrderByAlphabet