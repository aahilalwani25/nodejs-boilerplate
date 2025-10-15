const authService= require('../services/auth.service')

const registerController=async(req,res)=>{
    const result= await authService.register(req.body)
    res.status(result.status).send({...result})
}

 const loginController=(req,res)=>{
    res.status(200).send({})
}

module.exports={
    registerController,
    loginController
}