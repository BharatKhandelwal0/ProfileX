import User from '../model/model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async(req,res)=>{
    try{
        const {name,email,password} = req.body
        const exists = await User.findOne({email})
        if(!exists){
            return res.status(400).json({message:`${email} , This email is not registered`})
        }
        const comaparePassword = await bcrypt.compare(password, exists.password)
        if(!comaparePassword){
            return res.status(400).json({message:`incorrect Pasword`})
        }
        const accessToken = jwt.sign({userId:exists._id,role:exists.role},process.env.ACCESS_TOKEN,{expiresIn:'10min'})
        console.log(`accessToken:- ${accessToken}`);

        const refreshToken = jwt.sign({userId:exists._id},process.env.REFRESH_TOKEN,{expiresIn:'7d'})
        console.log(`refreshToken:- ${refreshToken}`);     

        await User.findByIdAndUpdate(
            exists._id,
            {$push:{"refreshTokens":{"token":refreshToken}}},
            {returnDocument:"after"}
        )
        res.status(200).json({message:`${name} has logined Successfully`})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

