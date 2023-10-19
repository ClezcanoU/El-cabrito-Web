import { Router } from 'express'
import { auth } from '../controllers/authentication.js';

export const registerRouter = Router()

const authController = new auth();

registerRouter.post('/', authController.register)