import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async (uri) => {
  try {
    const conn = await mongoose.connect(process.env.mongodb_uri)
    console.log(`Connected to DB: ${conn.connection.host}`)
  } catch (err) {
    console.error('Error in db connection', error)
    process.exit(1)
  }
}

export { connectDB }
