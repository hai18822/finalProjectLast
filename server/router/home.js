const router = require('express').Router()
const DistrictModel = require('../models/districtModel')

router.get('/district', async(req,res)=>{
    try {
        const results=await DistrictModel.find({})
        res.json(results)
    } catch (error) {
        res.status(400).json(`ERROR: ${error}`)
    }
})





module.exports = router