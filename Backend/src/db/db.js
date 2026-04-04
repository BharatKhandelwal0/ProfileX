import mongoose from 'mongoose'

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_CONN_STRING)
        console.log("Database connected successfully");
    }catch(error){
        console.log("Database connection Unsuccessfully");
        process.exit(1)
    }
}

export default connectDB 