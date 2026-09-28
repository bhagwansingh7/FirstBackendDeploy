const mysql=require('mysql2/promise')
require('dotenv').config()
console.log(process.env.DB_HOST,process.env.DB_NAME)
const pool=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true
    }
})
const db=async()=>{
    try {
        const conn=await pool.getConnection();
        console.log('db connection created successfully')
        const [tables]=await pool.execute(`show tables`)
        console.log(tables)
        conn.release()
    } catch (error) {
        console.log('error in db connection',error)
        
    }

}
db();


module.exports=pool