const router = require('express').Router()
const userOwnerController = require('../controller/userOwnerController')
const userMiddleware = require('../middleware/userMiddleware')


router.post('/register', userOwnerController.register)

router.post('/login', userOwnerController.login)

router.post('/accept_token', userOwnerController.getAcceptToken)

router.post('/add_post',userMiddleware, userOwnerController.addPost)

router.put('/update_post/:id',userMiddleware, userOwnerController.editPost)

router.delete('/delete_post/:id',userMiddleware, userOwnerController.deletePost)

module.exports = router