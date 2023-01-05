import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { filterByCreate, getAllActivities } from '../../redux/actions'
import style from "./Filters.module.css"

export default function FilterByCreate() {

    const dispatch = useDispatch()

    const activities = useSelector(state=> state.activities)

    useEffect(()=>{
        dispatch(getAllActivities())
    },[dispatch])

    function handleSelect (e){
        dispatch(filterByCreate(e.target.value)) 
    };

  return (
        <div className={style.select}>
            <select onChange={(el)=>handleSelect(el)}>
            <option value ='sin filtros'>All</option>
                {activities.map((act, index)=>(
            <option key={index} value={act.name}>{act.name}</option>
            ))}
            </select>
        </div>
    )
    }

