// Importing necessary modules
import express from 'express'
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'
import bodyParser from 'body-parser'
import cors from 'cors'

// Load environment variables from .env file
dotenv.config()

// MongoDB connection URL and client instance
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

// Database name
const dbname = 'anypass'

// Create an Express app
const app = express()
const port = 3000

// Middleware to parse JSON bodies
app.use(bodyParser.json())

// Middleware to enable CORS
app.use(cors())

// Connect to MongoDB
client.connect()

// Route to fetch all saved passwords
app.get('/', async (req, res) => {
  const db = client.db(dbname)
  const collection = db.collection('Passwords')
  const findResult = await collection.find({}).toArray()
  res.json(findResult)
})

// Route to add a new password
app.post('/', async (req, res) => {
  const password = req.body
  const db = client.db(dbname)
  const collection = db.collection('Passwords')
  const findResult = await collection.insertOne(password)
  res.send({ success: true, result: findResult })
})

// Route to delete a password
app.delete('/', async (req, res) => {
  const password = req.body
  const db = client.db(dbname)
  const collection = db.collection('Passwords')
  const findResult = await collection.deleteOne(password)
  res.send({ success: true, result: findResult })
})

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
