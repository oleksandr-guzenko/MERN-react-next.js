import {Router} from 'express'
// import {verifyToken} from '../middleware/auth'
import {Create, Find, Remove, Update} from '../controller/movie.controller'

const router = Router()

router.post('/movie/create', Create)
router.get('/movie/find/:id?', /*verifyToken,*/ Find)
router.put('/movie/update/:id', Update)
router.delete('/movie/remove', Remove)

export default router