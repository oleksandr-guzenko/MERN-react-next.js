import {Router} from 'express'
import {verifyToken} from '../middlewares/auth'
import {Create, Find, Remove, Update} from '../controller/movie.controller'

const router = Router()

router.post('/movie/create', verifyToken, Create)
router.get('/movie/find/:id?', verifyToken, Find)
router.put('/movie/update/:id', verifyToken, Update)
router.delete('/movie/remove', verifyToken, Remove)

export default router