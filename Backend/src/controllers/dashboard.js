import User from "../model/model.js"

export const dashboard = async (req,res)=>{
    const user = req.user
    const check = await User.findById(user.userId)
    if(!check){
        return res.status(401).json({message:`user not Found`})
    }
    res.status(200).json({message:`welcome ${check.name} to ${check.role} dashboard`})
}
