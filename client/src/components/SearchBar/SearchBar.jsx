import React,{useState} from 'react'
import style from "./SearchBar.module.css"
import { useDispatch} from "react-redux"
import { getCountryByName } from '../../redux/actions';

function SearchBar() {

  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const handlechange = (e) => {
    setName(e.target.value)
  }
  const handleClick = () => {
    dispatch(getCountryByName(name))
  }
  return (
    <div className={style.searchBar}>
        <input onChange={handlechange} type="tex" placeholder="write a country"/>
        <button onClick={handleClick} className={style.button}>Search</button>
    </div>
  )
}

export default SearchBar;