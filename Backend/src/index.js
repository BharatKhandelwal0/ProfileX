import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/db.js'
import {v2 as cloudinary} from 'cloudinary'
import app from './app.js'

await connectDB()

const PORT = process.env.PORT || 5000

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT :- ${PORT}`);
})