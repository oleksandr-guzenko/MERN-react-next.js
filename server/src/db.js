import mongoose from 'mongoose'
import {DB_URL} from './config/db.config'

mongoose.connect(DB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`Error to connect MongoDB: ${err}`))