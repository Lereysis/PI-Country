const {Country, Activity} = require("../db")
const {Router} = require('express');
const router = Router()

router.get('/', async (req, res) => {
    try {
       const allActivities = await Activity.findAll({
          include: Country
       })
       res.status(200).json(allActivities)
    } catch (error) {
       res.status(400).json({ error: "No se encontraron actividades" })
    }
 
 });

 module.exports = router;