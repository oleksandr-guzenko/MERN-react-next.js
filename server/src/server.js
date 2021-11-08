import Express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import homeRoutes from './routes/home.routes'
import movieRoutes from './routes/movie.routes'
import './db'

dotenv.config()

const app = Express()

const port = process.env.PORT || 3000

app.set('port', port)

app.use(cors())
app.use(Express.urlencoded({extended: true}))
app.use(Express.json())

app.use(homeRoutes)
app.use('/api', movieRoutes)

export default app