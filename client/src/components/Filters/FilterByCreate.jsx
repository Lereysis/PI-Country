import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { filterByCreate, getAllActivities } from '../../redux/actions'
import style from "./Filters.module.css"

export default function FilterByCreate() {

    const dispatch = useDispatch()

    const activities = useSelector(state=> state.activities)
    const [currentPage,setCurrentPage] = useState(0)

    useEffect(()=>{
        dispatch(getAllActivities())
    },[dispatch])

    function handleSelect (e){
        e.preventDefault();
        dispatch(filterByCreate(e.target.value)) 
        setCurrentPage(1)
        };

  return (
        <div className={style.select}>
            <select onChange={(el)=>handleSelect(el)}>
            <option value ='sin filtros '>Sin Filtrar</option>
                {activities.map((act)=>(
            <option value={act.name}>{act.name}</option>
            ))}
            </select>
        </div>
    )
    }

