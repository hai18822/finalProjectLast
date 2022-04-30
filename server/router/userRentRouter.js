const router = require('express').Router()
const userRentController = require('../controller/userRentController')


router.post('/register', userRentController.register)

router.post('/login', userRentController.login)

router.post('/accept_token', userRentController.getAcceptToken)

module.exports = router