import express from 'express'
const app = express()
import cors from 'cors'
import Routes from './routes/user.route.js'
import cookieParser from 'cookie-parser'

app.use(cookieParser())
app.use(express.urlencoded())
app.use(express.json())
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true,
    methods : ['GET','POST','PUT','DELETE']
}))

app.use('/user',Routes)

export default app 