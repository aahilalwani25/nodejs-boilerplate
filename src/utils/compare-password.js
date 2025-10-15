import { compare } from "bcrypt"

export const comparePassword= async(userPassword,dbPassword)=>{
    await compare(userPassword,dbPassword)
}