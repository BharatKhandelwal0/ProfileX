import express from 'express'
import {login} from '../controllers/controller.js'
import { dashboard } from '../controllers/dashboard.js'
import { userRegister } from '../controllers/userRegister.js'
import { authMiddleware } from '../controllers/authMiddleware.js'
import { infomation } from '../controllers/user.info.js'
import { forgetPassword, verfiyOtp } from '../controllers/forgetPassword.js'
const Router = express.Router()

Router.post('/register',userRegister)
Router.post('/login',login)
Router.post('/info',authMiddleware,infomation)
Router.get('/dashboard',authMiddleware,dashboard)
Router.post('/forget-password',forgetPassword)
Router.post('/verify-otp',verfiyOtp)

export default Router 