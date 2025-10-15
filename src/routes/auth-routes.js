//all routes will be gathered here
const userController = require('../controllers/auth-controller')
const authValidator= require('../validators/auth-validator')

const authRoutes=[
    {
        url:'/register',
        method:'POST',
        preHandler: authValidator.registerValidator,
        handler: userController.registerController
    },
    {
        url:'/login',
        method:'POST',
        handler: userController.loginController
    }
]

module.exports= authRoutes;