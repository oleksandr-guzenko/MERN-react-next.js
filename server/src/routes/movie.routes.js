import {Router} from 'express'
import {Create, Find, Remove} from '../controller/movie.controller'

const router = Router()

router.post('/movie/create', Create)
router.get('/movie/find/:id?', Find)
router.delete('/movie/remove', Remove)

export default router