import express from 'express'
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

// CORS: must run before body parsers. Vercel serverless + browser preflight (OPTIONS) need this.
// If ALLOWED_ORIGINS is unset → allow any Origin (reflect). If set → merge with defaults below + env.
const DEFAULT_ORIGINS = [
  'https://ecom-project-admin.vercel.app',
  'http://localhost:5173',
  'http://localhost:5174',
]
const envOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)
const allowAny = envOrigins.length === 0
const mergedAllowed = [...new Set([...DEFAULT_ORIGINS, ...envOrigins])]

app.use((req, res, next) => {
  const origin = req.headers.origin

  if (origin && (allowAny || mergedAllowed.includes(origin))) {
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Credentials', 'true')
  } else if (!origin) {
    res.setHeader('Access-Control-Allow-Origin', '*')
  }

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,DELETE,PATCH,OPTIONS'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, token, X-Requested-With'
  )

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }
  next()
})

app.use(express.json())

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
  res.send('API Working')
})

// Local / traditional Node: listen. Vercel: serverless handler is the exported app (no listen).
if (!process.env.VERCEL) {
  app.listen(port, () => console.log('Server started on PORT : ' + port))
}

export default app
