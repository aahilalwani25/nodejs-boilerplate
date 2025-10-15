const dotenv = require('dotenv')
const jwt= require('jsonwebtoken')
dotenv.config()


export const signJwt=(data,email)=>{
    const verificationToken= jwt.sign(data,process.env.JWT_SECRET,{
        expiresIn:'10h'
    })
    return verificationToken;
}