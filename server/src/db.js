import {connect} from 'mongoose'
import {MONGODB_URL} from './config/db.config'

(async () => {
  try {
    const db = await connect(MONGODB_URL)
    console.log(`Connected to MongoDB to ${db.connection.name}`)
  } catch (error) {
    console.error(`Error connecting to MongoDB ${error}`)
  }
})()