const axios = require('axios')
const formatterCountries = require("../helpers/formatterCountries")
const url = "https://restcountries.com/v3/all";
const { Country } = require("../db")


const getCountries = async () => {
   try {
    let countries = []
    countries = await Country.findAll()
    if (countries.length) return countries
    
    const get = await axios.get(url)
    const result = await get.data.map( e => formatterCountries(e))
    countries = Country.bulkCreate(result)
    return countries
   }  catch (error) {
    throw new Error(error.message)
   }

}

module.exports = getCountries ;
    
