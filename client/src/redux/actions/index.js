import axios from "axios"
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"
export const GET_COUNTRY = "GET_COUNTRY"
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY"
export const ORDER_BY_ALPHABET = "ORDER_BY_ALPHABET"
export const ORDER_BY_POBLATION = "ORDER_BY_POBLATION"
export const FILTER_BY_CREATE = "FILTER_BY_CREATE"
export const GET_ACTIVITIES = "GET_ACTIVITIES"
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const CLEAN_STATE_COUNTRY_DETAIL = "CLEAN_STATE_COUNTRY_DETAIL"

export const getAllCountries = () => async dispatch => {
    return fetch("http://localhost:3001/all")
            .then(response => response.json())
            .then(data => dispatch({type: GET_ALL_COUNTRIES, payload: data}))
};

export const getCountry = (id) => async dispatch => {
    return fetch(`http://localhost:3001/country/${id}`)
            .then(response => response.json())
            .then(data => dispatch({type: GET_COUNTRY, payload: data}))
}

export const getCountryByName = (name) => async dispatch =>{
    return fetch(`http://localhost:3001/all?name=${name}`)
    .then(response=> response.json())
    .then(data=> dispatch({type:GET_COUNTRY_BY_NAME, payload: data}))
}

export const createActivity = (data)=> async dispatch =>{
    const response = await axios.post("http://localhost:3001/createActivity", data)
    return dispatch({type: CREATE_ACTIVITY, payload: response.data})

 }

 export const orderByAlphabet = (type) => {
    return {type:ORDER_BY_ALPHABET, payload: type}
}
 export const cleanDetailCountry = () => {
    return {type:CLEAN_STATE_COUNTRY_DETAIL}
}

export const orderByPoblation =(type) => {
    return {type:ORDER_BY_POBLATION, payload:type}
}

export const filterByCreate =(type) =>{
    return {type: FILTER_BY_CREATE, payload:type }
} 

export function getAllActivities() {
    return async (dispatch) => {
      const act = await axios("http://localhost:3001/allActivities");
      return dispatch({ type: "GET_ACTIVITIES", payload: act.data });
    };
  }

  export function filterByContinent(payload){
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}