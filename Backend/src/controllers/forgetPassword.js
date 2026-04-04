import User from '../model/model.js'
import crypto from 'crypto'
import bcrypt from 'bcrypt'

export const forgetPassword =async (req,res)=>{
    try{
        const {email} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Wrong Email ID"})
        }

        const otp = crypto.randomInt(1000,10000)
        const hashedOtp = await bcrypt.hash(otp.toString(),5)
        if(!hashedOtp){
            return res.status(500).json({message: "OTP Not generated"})
        }
        user.otp = hashedOtp
        await user.save()

        res.status(200).json({message:"OTP sent to your email", OTP: otp})

    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

export const verfiyOtp = async (req,res)=>{
    try{
        const {email, otp} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Wrong Email ID"})
        }
        const compareOtp = await bcrypt.compare(otp,user.otp)
        if(!compareOtp){
            return res.status(400).json({message:"Invalid OTP"})
        }
        user.otp = ""
        await user.save()
        res.status(200).json({message:"OTP verified successfully"}) 
    }catch(error){
        return res.status(500).json({error: error.message})
        
    }
}



