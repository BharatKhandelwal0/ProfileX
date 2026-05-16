import express from 'express'
import multer from 'multer'
import {login} from '../controllers/controller.js'
import { dashboard } from '../controllers/dashboard.js'
import { userRegister } from '../controllers/userRegister.js'
import { authMiddleware } from '../middleware/auth.Middleware.js'
import { upload } from '../middleware/multer.Middleware.js'
import { infomation } from '../controllers/user.info.js'
import { forgetPassword, verfiyOtp } from '../controllers/forgetPassword.js'
import { updatePassword } from '../controllers/updatePassword.js'
import {check} from '../controllers/user.check.js'
const Router = express.Router()

Router.post('/register',upload.single("image"),userRegister)
Router.post('/login',login)
Router.post('/info',authMiddleware,infomation)
Router.get('/dashboard',authMiddleware,dashboard)
Router.post('/forget-password',forgetPassword)
Router.post('/verify-otp',verfiyOtp)
Router.post('/update-password',updatePassword)
Router.get('/auth/check',authMiddleware,check)

export default Router 