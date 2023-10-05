import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => { //adding userid into the jwt payload, so we can pull it out to use
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d' //very important to have expiration
    });

    res.cookie('jwt', token, [{ //how we actually store it on client's browser
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict', //stop csrf attacks
        maxAge: 30 * 24 * 60 * 1000 //expiration, can't take string
    }])
}

export default generateToken