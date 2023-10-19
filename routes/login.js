import { Router } from 'express'
import { auth } from '../controllers/authentication.js'

export const authRouter = Router()

const authController = new auth();

authRouter.post('/', authController.login)

