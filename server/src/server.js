import Express, {urlencoded} from 'express'
import cors from 'cors'
import homeRouters from './routes/home.routes'
import dotenv from 'dotenv'
import './db'

dotenv.config()

const app = Express()

const port = process.env.PORT || 3000

app.set('port', port)

app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(Express.json())

app.use(homeRouters)

export default app