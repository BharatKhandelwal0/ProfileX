import User from '../model/model.js'
import bcrypt from 'bcrypt'

export const updatePassword = async(req,res)=>{
    try {
        const {email, newPassword} = req.body

        if(!email || !newPassword){
            return res.status(400).json({message:"All Fields Are Required"})
        }
    
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invaild Credentials"})
        }
        if(newPassword.length < 7){
            return res.status(400).json({message:"password Must Be greater than 7"})
        }

        const hashedPassword = await bcrypt.hash(newPassword , 10)

        user.password = hashedPassword
        await user.save()
    
        return res.status(200).json({message:"Password Updated Successfully"})
    } catch (error) {
        return res.status(500).json({error: error.message , error_stack: error.stack})
    }
}