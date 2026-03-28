import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// CORS must run before body parsers so OPTIONS preflight and all responses get headers.
// origin: true reflects the request Origin (needed for browser + Vercel admin/frontend).
// Optional: set ALLOWED_ORIGINS in .env (comma-separated) to restrict; otherwise any origin is reflected.
const extraOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

const corsOptions =
  extraOrigins.length > 0
    ? {
        origin(origin, callback) {
          if (!origin) return callback(null, true)
          if (extraOrigins.includes(origin)) return callback(null, true)
          callback(new Error('Not allowed by CORS'))
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'token', 'X-Requested-With'],
        optionsSuccessStatus: 204,
      }
    : {
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'token', 'X-Requested-With'],
        optionsSuccessStatus: 204,
      }

app.use(cors(corsOptions))
app.options('*', cors(corsOptions))

// middlewares
app.use(express.json())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port))