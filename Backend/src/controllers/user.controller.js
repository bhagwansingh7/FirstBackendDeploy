const {getusers} =require('../models/user.model')

const getallusers=async(req,res)=>{
    try {
        const users=await getusers();
        res.status(200).json({
            message:'here is user data',
            users
        })
        
    } catch (error) {
        res.status(401).json({
            message:'error in fetching user details',
            error:error.message
        }) 
    }
}

module.exports={getallusers}