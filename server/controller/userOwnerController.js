const UserOwnerModel = require('../models/userOwner')
const PostModel = require('../models/postModel')
const bcrypt = require('bcrypt')
const  jwt  = require('jsonwebtoken')

const userOwnerController = {
    register: async(req, res)=>{
        try {
            const {name, email, password} = req.body
            if(!name || !email || !password){
                return res.status(400).json({msg: "Please full!!"})
            }
            if(!validateEmail(email)){
                return res.status(400).json({ msg: "Invalid email." })
            }
            const userRent = await UserOwnerModel.findOne({name: name})
            if(userRent){
                return res.status(400).json({ msg: "This email already exit!!" })
            }
            if(password < 6){
                return res.status(400).json({ msg: "Password lest 6 charater!!" })
            }
            const passwordHash =await bcrypt.hash(password, 12)

            const newUserRent = new UserOwnerModel({
                name,
                email,
                password: passwordHash
            })
            newUserRent.save()
            const allUserRent = await UserOwnerModel.find()
            res.status(200).json(allUserRent)
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    login: async(req, res)=>{
        try {
            const {email, password} = req.body
            const userRent = await UserOwnerModel.findOne({email: email})
            
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
    addPost: async(req, res)=>{
        try {
            const {title, addressRoom, price, description, imageRoomm, roomArea} = req.body

            const newPost = new PostModel({
                title,
                addressRoom,
                price,
                description,
                imageRoomm,
                roomArea,
                userOwner: req.user.id
            })

            newPost.save()
            res.status(200).json({msg: "upload success"})
            
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    editPost:async(req,res)=>{
        try {
            const oldPost = await PostModel.findById(req.params.id)
            const {title, addressRoom, price, description, imageRoomm, roomArea} = req.body
           await PostModel.findByIdAndUpdate({_id: req.params.id},{
                title: title || oldPost.title,
                addressRoom: addressRoom || oldPost.addressRoom,
                price: price || oldPost.price,
                description: description || oldPost.description,
                imageRoomm: imageRoomm || oldPost.imageRoomm,
                roomArea: roomArea || oldPost.roomArea,
                userOwner: req.user.id
            })
        res.status(200).json({msg: "update success"})
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    deletePost:async(req,res)=>{
        try {
            await PostModel.findByIdAndDelete(req.params.id)
            res.status(200).json({msg: "Delete success"})
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


module.exports = userOwnerController