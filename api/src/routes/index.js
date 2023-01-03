const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const createActivity = require('./createActivity');
const getAllCountries = require("./getAllCountries")
const getCountryById = require("./getCountryById")
const getActivity = require("./getActivity")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/all",getAllCountries)
router.use("/",getCountryById)
router.use("/createActivity",createActivity)
router.use("/allActivities",getActivity)


module.exports = router;
