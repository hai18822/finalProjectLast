const jwt = require('jsonwebtoken');

const userMiddleware = (req, res, next)=>{
    try {
        const token = req.header('Authorization')
        if(!token) res.status(400).json({msg: "invalid Authentication"})

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
            if(err) res.status(400).json({msg: "Invalid Authentication"})
            req.user = user
            next()
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }

}

module.exports = userMiddleware