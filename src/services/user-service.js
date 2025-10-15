const User = require("../models/user")

const createUser = async ({ email, name, password, userRole }) => {
    try {
        const userCreate = await User.create({
            name,
            email,
            password,
            user_role: userRole
        });

        return {
            status: 201,
            message: "User Created Successfully",
            data: userCreate.toJSON()
        }
    } catch (e) {
        console.log(e)
        return {
            status: 500,
            message: "Error during User Creation: " + e.message
        }
    }
}

module.exports={createUser}