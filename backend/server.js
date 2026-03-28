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
connectCloudinary()
connectDB().catch((err) => console.error('MongoDB connection error:', err))

// CORS: first middleware, before body parsers. Use * + no credentials so admin + storefront work
// without a fixed allowlist (Axios default is withCredentials: false).
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
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

// Local: listen. Vercel: default export must be the Express app (see Vercel Express docs).
if (!process.env.VERCEL) {
  app.listen(port, () => console.log('Server started on PORT : ' + port))
}

export default app
