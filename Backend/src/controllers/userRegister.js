import User from "../model/model.js"
import bcrypt from 'bcrypt'

export const userRegister = async(req,res)=>{
    try{
        const {firstName,lastName,email,password} = req.body
        const exists = await User.findOne({email})
        if(exists){
            return res.status(401).json({message:`${email}, This email already exists , please login.`})
        }
        const hashedPassword = await bcrypt.hash(password,10)

        await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword
        })

        res.status(200).json({message:`${firstName} has Registered Successfuly`})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}