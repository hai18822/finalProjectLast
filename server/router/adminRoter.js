const router = require('express').Router()
const adminController = require('../controller/adminController')

const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  const upload = multer({ storage: storage })


router.post('/register', adminController.register)

router.post('/login', adminController.login)

router.post('/accept_token', adminController.getAcceptToken)

router.post('/delete_userOwner/:id', adminController.deleteUserOwner)

router.post('/delete_userRent/:id', adminController.deleteUserRent)

router.post('/addDistrict',upload.single('imageDistrict'), adminController.addDistrict)

module.exports = router