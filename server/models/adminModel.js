const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
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
        default: "admin"
    }
})
module.exports = mongoose.model("Admin", adminSchema)