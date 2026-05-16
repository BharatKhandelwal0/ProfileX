import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

export const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath){
            return null
        }
        const response = await cloudinary.uploader.upload(localFilePath,{resource_type: "auto"})
        fs.unlinkSync(localFilePath)
        console.log(`file is Uploaded On cloudinary:- ${response.secure_url}`);
        return response
    } catch (error) {
        if(fs.existsSync(localFilePath)){
            fs.unlinkSync(localFilePath)
        }
        console.log(`File is removed form local File path ${error.message}`);
        return null
    }
    
}