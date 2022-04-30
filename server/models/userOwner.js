const mongoose = require('mongoose')

const userOwnerSchema = new mongoose.Schema({
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
    phone:{
        type: String,
    },
    role:{
        type: String,
        default: "userOwner"
    }
})
module.exports = mongoose.model("UserOwners", userOwnerSchema)