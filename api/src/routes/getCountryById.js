const {Router} = require('express');
const getCountryById = require("../services/getCountryById")
const router = Router();

router.get("/country/:id",async (req,res,next)=> {
    try {
        const id = req.params.id;
        const response = await getCountryById(id);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
        next(error)
    }
})

module.exports = router;