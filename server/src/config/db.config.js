const DB_HOST = process.env.DB_HOST 
const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PORT = process.env.DB_PORT
const DB_PASSWORD = process.env.DB_PASSWORD
const NODE_ENV = process.env.NODE_ENV

export const MONGODB_URL = NODE_ENV === 'production'
  ? `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
  : `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`