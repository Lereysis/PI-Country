
const {Router} = require('express');
const getCountries = require("../services/getCountries")
const router = Router();

router.get("/", async (req, res) => {
    const {name} = req.query;
    let countriesTotal = await getCountries();
    if(name){
     let countryName = await countriesTotal.filter( c=> c.name.toLowerCase().includes(name.toLocaleLowerCase()))
     countryName.length ? 
     res.status(200).send(countryName) :
     res.status(404).send('No se encontró el país')
    } else {
     res.status(200).send(countriesTotal)
    }
 });

 module.exports = router;