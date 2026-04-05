import User from '../model/model.js'
import bcrypt from 'bcrypt'

export const updatePassword = async(req,res)=>{
    try {
        const {email, oldPassword, newPassword} = req.body

        if(!email || !oldPassword || !newPassword){
            return res.status(400).json({message:"All Fields Are Required"})
        }
    
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invaild Credentials"})
        }
        if(newPassword.length < 7){
            return res.status(400).json({message:"password Must Be greater than 7"})
        }

        const isMatch = await bcrypt.compare(oldPassword,user.password)
        if(!isMatch){
            return res.status(401).json({message:"entered Wrong Old Password"})
        }

        const isSame = await bcrypt.compare(newPassword,user.password)
        if(isSame){
            return res.status(400).json({message:"New password must be different from old password"})
        }

        const hashedPassword = await bcrypt.hash(newPassword , 10)

        user.password = hashedPassword
        await user.save()
    
        return res.status(200).json({message:"Password Updated Successfully"})
    } catch (error) {
        return res.status(500).json({error: error.message , error_stack: error.stack})
    }
}