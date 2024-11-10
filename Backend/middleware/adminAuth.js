import jwt from'jsonwebtoken'

const authMiddleware=async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).json({ message: 'Access denied, no token provided' });
    }

    try {
        const decode=jwt.verify(token,process.env.JWT_TOKEN)
        req.user=decode
        console.log(decode);
        
        next()
    } catch (error) {
       return res.status(400).json({ message: 'Invalid token' });
    }
}

const authorizRole=(...allowedRoles)=>{
    return (req,res,next)=>{
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json(
                {
                    message:"Access denied"
                }
            )
        }
        next()
    }
}


export { authMiddleware, authorizRole };