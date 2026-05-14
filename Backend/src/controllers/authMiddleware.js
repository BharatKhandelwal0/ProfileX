import jwt from 'jsonwebtoken' 

export const authMiddleware =async(req,res,next)=>{
    try{
        
        const token = req.cookies?.AccessToken
        if(!token){
            return res.status(401).json({message:"user not logined or unauthorized"})
        }
        
        const decoded = await jwt.verify(token,process.env.ACCESS_TOKEN)
        
        req.user = decoded
        console.log(decoded);
        
        next()
    }catch(error){
        res.status(500).json({error:error.message})
    }
}