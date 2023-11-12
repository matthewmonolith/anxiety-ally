import jwt from 'jsonwebtoken'; //need to get payload from token, user id
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => { //have to be logged in to access route + always need next for middleware
    let token

    token = req.cookies.jwt;

    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET) //has userid in it

            req.user = await User.findById(decoded.userId).select('-password') //when grabbing by userid it selects password, we don't want that, so let's remove that

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorised, invalid token') //token there just not valid
        }
    }else {
        res.status(401)
        throw new Error('Not authorised, no token')
    }
})

export { protect } //can add in other auth, like admin middleware