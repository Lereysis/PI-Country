const {Router} = require('express');
const createActivity = require('../services/createActivity');
const router = Router()


router.post("/", async (req,res,next) => {
    try {
        const response = await createActivity(req.body);
        res.status(201).json({
            status: 'has been created succefully'
        })
    
    } catch (error) {
        
        res.status(400).json({error: error.message})
        next(error)
    }
})



module.exports = router;