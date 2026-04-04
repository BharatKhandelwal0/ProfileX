import User from "../model/model.js"

export const infomation = async (req,res)=>{
    try{
        const {image,desc,tags,bio,skills} = req.body
        const info = await User.findByIdAndUpdate(
            req.user.userId,
            {$push:{"userInfo":{"image":image,"desc":desc,"tags":tags,"bio":bio,"skills":skills}}},
            {returnDocument:"after"}
        )
        const infoFind = await User.find({image,desc,tags,bio,skills})
        if(!infoFind){
            return res.status(401).json({message:"Fill All Details"})
        }
        res.status(200).json(info.userInfo[5])
    }catch(error){
        res.status(401).json({error:error.message})
    }
}
