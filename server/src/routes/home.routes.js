import {Router} from 'express'
import {home, about} from '../controller/home.controller'

const router = Router()

router.get('/', home)
router.get('/about', about)

export default router