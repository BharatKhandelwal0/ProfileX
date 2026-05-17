import mongoose from 'mongoose'

const dbSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        toUppercase:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        toUppercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        validator:{
            validate:{endsWith:"@gmail.com"},
            message:"Ends it with @gmail.com"
        },
        index:true
    },
    password:{
        type:String,
        require:true,
        trim:true,
    },
    otp:{
        type:String,
        trim:true,
        default:null
    },
    otpExpires:{
        type:Date,
        default:null
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    refreshToken:{
        type:String,
        trim:true,
        default:""
    },
    image:{
        type:String,
        trim:true,
        required:true
    },
    bio:{
        type:String,
        trim:true,
        required:true
    },
    about:{
        type:String,
        trim:true,
        required:true
    },
    skills:[{
        type:String,
        trim:true,
        required:true
    },{
        timestamps:true
    }]
})
const User = mongoose.model("user",dbSchema)

export default User
