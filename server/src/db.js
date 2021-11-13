import mongoose from 'mongoose'
import {DB_URL} from './config/db.config'

mongoose.connect(DB_URL)
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(`Error to connect DB: ${err}`))