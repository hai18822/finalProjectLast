const mongoose = require('mongoose')

const DistrictSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true  
    },
    imageDistrict:{
        type:String
    }
})
module.exports = mongoose.model("District", DistrictSchema)