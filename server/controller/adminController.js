const AdminModel = require('../models/adminModel')
const bcrypt = require('bcrypt')
const  jwt  = require('jsonwebtoken')
const UserOwnerModel = require('../models/userOwner')
const UserRentModel = require('../models/userRent')
const DistrictModel = require('../models/districtModel')


const adminController = {
    register: async(req, res)=>{
        try {
            const {name, email, password} = req.body
            if(!name || !email || !password){
                return res.status(400).json({msg: "Please full!!"})
            }
            if(!validateEmail(email)){
                return res.status(400).json({ msg: "Invalid email." })
            }
            const userRent = await AdminModel.findOne({name: name})
            if(userRent){
                return res.status(400).json({ msg: "This email already exit!!" })
            }
            if(password < 6){
                return res.status(400).json({ msg: "Password lest 6 charater!!" })
            }
            const passwordHash =await bcrypt.hash(password, 12)

            const newUserRent = new AdminModel({
                name,
                email,
                password: passwordHash
            })
            newUserRent.save()
            const allUserRent = await UserRentModel.find()
            res.status(200).json(allUserRent)
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    login: async(req, res)=>{
        try {
            const {email, password} = req.body
            const userRent = await UserRentModel.findOne({email: email})
            
            if(!userRent){
                return res.status(400).json({msg: "This email done not exit!!"})
            }
            const isMatch = await bcrypt.compare(password, userRent.password)
            if(!isMatch) return res.status(400).json({msg: "Password is incorrect!!!"})

            const refresh_token = createRefeshToken({id: userRent._id})

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: 'user/refresh_token',
                maxAge: 7 * 24 * 60 * 60 *1000
            })

            res.json({ msg: "Login success!" })
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    getAcceptToken: async (req, res)=>{
        try {
            const rf_token = req.cookies.refreshtoken
            console.log(rf_token)

            if(!rf_token) return res.status(400).json({msg: "Please Login now!!"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
                if(err) return res.status(400).json({msg: "Please login now!!!"})

                const accept_token = createAcceptToken({id: user.id})

                res.json({accept_token})
            })
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    deleteUserOwner: async(req, res)=>{
        try {
            await UserOwnerModel.findByIdAndDelete(req.params.id)
            res.json(200).json({msg: "Delete User owner success"})
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    deleteUserRent: async(req, res)=>{
        try {
            await UserRentModel.findByIdAndDelete(req.params.id)
            res.json(200).json({msg: "Delete User rent success"})
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    addDistrict:async(req,res)=>{
    
        try {
            const name= req.body.name
            const imageDistrict= (req.file) ? req.file.originalname : null;
            const newDistrict = new DistrictModel({
                name,
                imageDistrict
            })

            newDistrict.save()
            res.status(200).json({msg: "Add district success"})
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }
}

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const createActivationToken = (payload)=>{
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}
const createAcceptToken = (payload)=>{
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}
const createRefeshToken = (payload)=>{
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}


module.exports = adminController