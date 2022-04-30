const mongoose = require('mongoose')

const userRentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please enter your name!'],
        trim: true
    },
    email: {
        type: String,
        require: [true, 'Please enter your email!'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: [true, 'Please enter your password!'],
    },
    role:{
        type: String,
        default: "userRole"
    }
})
module.exports = mongoose.model("UserRents", userRentSchema)