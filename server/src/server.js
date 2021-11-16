import Express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import homeRoutes from './routes/home.routes'
import userRoutes from './routes/user.routes'
import movieRoutes from './routes/movie.routes'
import headers from './middlewares/header'
import './config/dotenv.config'
import './db'

const app = Express()

const port = process.env.PORT || 3000

app.set('port', port)

app.use(cors())
app.use(morgan('dev'))
app.use(headers)

app.use(homeRoutes)
app.use('/api', userRoutes)
app.use('/api', movieRoutes)

export default app