import {Router} from 'express'
import {Signin, Signup} from '../controller/user.controller'

const router = Router()

router.post('/authentication/signup', Signup)
router.post('/authentication/signin', Signin)

export default router