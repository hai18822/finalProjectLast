const mongoose = require('mongoose')
const { Schema } = mongoose;
const postModelSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    addressRoom: {
        type: String,
    },
    price: {
        type: String,
    },
    description:{
        type: String,
    },
    imageRoomm: {
        type: String,
    },
    roomArea: {
        type: String,
    },
    userOwner: {
        type: Schema.Types.ObjectId,
        ref: 'UserOwners'
    }
})
module.exports = mongoose.model("PostModel", postModelSchema)