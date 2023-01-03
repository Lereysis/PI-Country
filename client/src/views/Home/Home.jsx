import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardCountry from "../../components/CardCountry/CardCountry"
import { getAllCountries} from "../../redux/actions/index"
import style from "./Home.module.css"
import Loading from '../../components/Loading/Loading';
import NotFound from '../NotFound/NotFound';
import Nav from '../../components/Nav/Nav'
import ContainerFilter from '../../components/ContainerFilters/ContainerFilters'

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector( state => state.countries)
  const filterCountries =  useSelector(state => state.filterCountries )
  useEffect(()=>{
    dispatch(getAllCountries())
  },[dispatch])

  //Logic Pagination
  const [cardsPerView, setCardsPerView] = useState([])
  const [currentPage,setCurrentPage] = useState(0)
  const [pagesTotal, setTotalPages] = useState(0)

  useEffect(()=>{
      setCardsPerView([...filterCountries].splice(0,9))
      setCurrentPage(0)
      setTotalPages(Math.ceil(filterCountries.length/10))
  },[filterCountries])

  function HandleForwad () {
      const totalElementos = filterCountries.length;
      const nextPage = currentPage + 1;
      const firstIndex = nextPage * 10;
      if(firstIndex >= totalElementos) return;
      setCurrentPage(nextPage)
      setCardsPerView([...filterCountries].splice(firstIndex,10));
  }
  function HandleBack () {
      const prevPage = currentPage - 1;
      let totalItemsByPage = 10
      if(prevPage < 0 ) return;
      if(prevPage === 0) {
        totalItemsByPage = 9
      }
      const firstIndex = prevPage * 10;
      setCurrentPage(prevPage)
      setCardsPerView([...filterCountries].splice(firstIndex,totalItemsByPage));
  }

  return (
    <>
    <Nav/>
      <div className={style.container}>
        <ContainerFilter/>
        <div>
          {!data.length 
              ? (
                  <Loading/>
                ) 
              : (
                  <div >
                    <div >
                      <div className={style.pagination }>
                          <button className={style.buttonPrev} onClick={HandleBack}>Prev</button>
                          <span >{currentPage + 1} of {pagesTotal} </span>
                          <button className={style.buttonNext} onClick={HandleForwad}>next</button>
                      </div>
                    </div>
                    <div className={style.wrapper}>
                      {
                        cardsPerView.length === 0 
                        ?  (<NotFound/>) 
                        : cardsPerView.map(e => (
                            <CardCountry
                              key={e.id}
                              id={e.id}
                              name={e.name}
                              image={e.flags}
                              continents={e.continents}
                            />
                          ))
                        }
                      </div>
                    </div>
                )
            }
        </div>
      </div>
    </>
  )
}


export default Home;