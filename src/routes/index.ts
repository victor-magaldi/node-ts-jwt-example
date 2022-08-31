import { Router } from 'express'
import * as PageController from '../controllers/pageController'
import * as AuthController from '../controllers/authController'
import { json } from 'stream/consumers'

const router = Router()

router.get('/', PageController.home)
router.post('/auth/register', AuthController.registerUser)
router.get(
  '/ping',
  function (req, res, next) {
    const { name, age } = req.query
    console.log('name:', name, 'age', age)
    next()
  },
  function (req, res, next) {
    console.log('baseUrl 2:', req.ip)
    next()
  },
  function (req, res, next) {
    const { name, age } = req.query
    res.json({ name, age })
  }
)

export { router }
