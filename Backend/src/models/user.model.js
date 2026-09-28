//get user 

const pool=require('../../config/db')
const getusers=async()=>{
    try {
        const [users]=await pool.execute(`select * from students`)
        return users
    } catch (error) {
        throw error
    }
}
module.exports={getusers}