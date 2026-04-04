import express from 'express'
const app = express()
import cors from 'cors'
import Routes from './routes/user.route.js'


app.use(express.urlencoded())
app.use(express.json())
app.use(cors({origin:'http://localhost:5173'}))

app.use('/user',Routes)

export default app 