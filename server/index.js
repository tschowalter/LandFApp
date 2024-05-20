import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import { AdminRouter } from './routes/auth.js'
import { clientRouter } from './routes/client.js'

dotenv.config()
const port = parseInt(process.env.PORT) || 3000;

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', AdminRouter)
app.use('/client', clientRouter)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})