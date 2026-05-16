import User from "../model/model.js"
import bcrypt from 'bcrypt'
import { uploadOnCloudinary } from '../utils/cloudinary.js'

export const userRegister = async(req,res)=>{
    try{
        const {firstName,lastName,email,password,image,bio,about,tags,skills} = req.body
        const exists = await User.findOne({email})
        if(exists){
            return res.status(401).json({message:`${email}, This email already exists , please login.`})
        }
        const hashedPassword = await bcrypt.hash(password,10)

        const imageLocalPath = req.file?.path
        if(!imageLocalPath){
            return res.status(400).json({message: "Image Not Found"})
        }
        const profileImage = await uploadOnCloudinary(imageLocalPath)
        if(!profileImage?.secure_url){
            return res.status(500).json("Image not Uploaded properly on Cloudinary")
        }        

        await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            image: profileImage.secure_url,
            bio,
            about,
            skills
        })

        res.status(200).json({message:`${firstName} has Registered Successfuly`})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}