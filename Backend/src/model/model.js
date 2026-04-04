import mongoose from 'mongoose'

const dbSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        capitalize:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        capitalize:true
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
        default:""
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    refreshTokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    userInfo:[{
        image:{
            type:String,
            trim:true,
        },
        desc:{
            type:String,
            trim:true
        },
        tags:[{
            type:String,
            trim:true,
            capitalize:true,

        }],
        bio:{
            type:String,
            trim:true,
        },
        skills:{
            type:String,
            trim:true,
        }
    }]
})
const User = mongoose.model("user",dbSchema)

export default User
