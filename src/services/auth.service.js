const userService = require('./user.service')

const register = async (body) => {
    const result = await userService.createUser({ ...body });
    return result;
}

module.exports={register}