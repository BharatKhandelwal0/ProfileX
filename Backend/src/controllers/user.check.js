export const check = (req,res)=>{
    try {

        return res.status(200).json({
            Authentication : true,
            user: req.user
        })
    } catch (error) {
        return res.status(500).json(error.message)
    }
    
}