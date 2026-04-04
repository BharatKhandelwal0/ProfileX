import jwt from 'jsonwebtoken' 

export const authMiddleware =(req,res,next)=>{
    try{
        const authHeader = req.headers.authorization
        if(!authHeader){
            return res.status(401).json({message:"user not logined or unauthorized"})
        }
        const Token = authHeader.split(' ')[1]
        const decoded = jwt.verify(Token,process.env.ACCESS_TOKEN)
        req.user = decoded
        next()
    }catch(error){
        res.status(500).json({error:error.message})
    }
}