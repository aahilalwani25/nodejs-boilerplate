const Joi = require("joi");

const registerValidatorSchema= Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
})

const registerValidator= (req,res,done)=>{
    try{
        const {error}= registerValidatorSchema.validate(req.body);
        if(error){
            return res.status(400).send(error.details[0].message);
        }
        done();
    }catch(error){
        console.error("validators->authValidator.js->registerValidator");
        console.log(err)
    }
}

module.exports={
    registerValidator
}

