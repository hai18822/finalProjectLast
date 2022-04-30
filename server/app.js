require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require("cookie-parser")


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.static('public'))



const URI = process.env.MONGODB_URL

mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log("Connect to mongodb")
})

app.use('/admin', require('./router/adminRoter'))

app.use('/user', require('./router/userRentRouter'))

app.use('/userOwner', require('./router/userOwnerRouter'))
app.use('/', require('./router/home'))


const PORT = process.env.PORT || 8000


app.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)})

