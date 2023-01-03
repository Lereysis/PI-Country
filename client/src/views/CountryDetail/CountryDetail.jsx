import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cleanDetailCountry, getCountry } from '../../redux/actions';
import style from "./CountryDetail.module.css"
import{Link} from "react-router-dom"

export const CountryDetail = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const country = useSelector(state => state.countryDetail)

    useEffect(()=> {
        dispatch(getCountry(id))
        return () => {
          dispatch(cleanDetailCountry())
        }
    },[dispatch,id]);

  return (
    <div className={style.content}>
        <div className={style.card}>
          <h1>{country.name}</h1>
          <img src={country.flags} alt={country.name}/>
          <p>Continent: {country.continents}</p>
          <p>Capital: {country.capital}</p>
          <p>subregion: {country.subregion}</p>
          <p>area: {country.area}</p>
          <p>population: {country.population}</p>
        </div>
        <div >
          {
            Boolean(country.activities?.length) 
            ? (
              <div className={style.cardActivity}>{country.activities?.map(e =>{
                return(
                  <div key={e.id}>
                    <h1>Activity</h1>
                    <p><b>Name: </b> {e.name}</p>
                    <p><b>Dificulty: </b> {e.dificulty}</p>
                    <p><b>Duration: </b> {e.duration}</p>
                    <p><b>Season: </b>{e.season}</p>
                  </div>
                )
              })}
            </div>
            ) : (            
               <div className={style.cardActivity}>
                  <div>
                   <h1>there's not information about activities</h1>
                  </div>
              </div>)
          }

        </div>
        <div>
          <Link to="/home"><button className={style.button}>Back Home</button></Link>
        </div>
    </div>
  )
}

export default CountryDetail;