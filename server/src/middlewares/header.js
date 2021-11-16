import express from 'express'

const headers = new express.Router()

headers.use(express.json())
headers.use(express.urlencoded({extended: false}))

headers.use((_, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  )

  next()
})

export default headers