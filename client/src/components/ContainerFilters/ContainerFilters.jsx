import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import OrderByAlphabet from '../Filters/OrderByAlphabet'
import OrderByPoblation from '../Filters/OrderByPoblation'
import style from "./ContainerFilters.module.css"
import { FilterByContinent } from '../Filters/FilterByContinent'
import FilterByCreate from '../Filters/FilterByCreate'


const ContainerFilter = () => {
  return (
    <>
        <section className={style.containerFilter}>
            <div>
              <h4>Search</h4>
              <div>
                <SearchBar/>
              </div>
            </div>
            <div>
              <h4>Filter</h4>
              <div>  
                   <FilterByContinent/>
                   <FilterByCreate/>
              </div>
            </div>
            <div>
              <h4>Sort</h4>
              <div>
                <OrderByAlphabet/>
                <OrderByPoblation/>
              </div>
            </div>
        </section>
    </>
  )
}

export default ContainerFilter;