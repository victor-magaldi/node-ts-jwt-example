import { Router } from 'express'
import * as PageController from '../controllers/pageController'
import * as AuthController from '../controllers/authController'

const router = Router()

router.get('/', PageController.home)
router.post('/auth/register', AuthController.registerUser)

export { router }
