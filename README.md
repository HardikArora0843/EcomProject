# 🛍️ EcomShop - Full-Stack E-Commerce Platform

<div align="center">

![EcomShop Logo](https://img.shields.io/badge/EcomShop-Fashion%20Store-black?style=for-the-badge&logo=shopping-bag&logoColor=white)

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.14-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

*A modern full-stack fashion e-commerce platform with multi-gateway payments, admin panel, and cloud media management*

[🌟 Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [🏗️ Project Structure](#️-project-structure) • [🚀 Quick Start](#-quick-start) • [📚 API Documentation](#-api-documentation)

</div>

---

## 📋 Table of Contents

- [🌟 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Project Structure](#️-project-structure)
- [🚀 Quick Start](#-quick-start)
- [🔧 Environment Setup](#-environment-setup)
- [📚 API Documentation](#-api-documentation)
- [🧩 UI Components](#-ui-components)
- [💳 Payment Integration](#-payment-integration)
- [👨‍💼 Admin Panel](#-admin-panel)
- [🔒 Authentication & Security](#-authentication--security)
- [🚢 Deployment](#-deployment)

---

## 🌟 Features

### 🎯 Customer-Facing Features

#### 🏠 **Home & Discovery**
- **Hero Banner** — Eye-catching landing section with promotional messaging
- **Latest Collection** — Dynamically showcases newest arrivals
- **Best Sellers** — Highlights top-performing products
- **Newsletter Subscription** — Email capture for marketing campaigns
- **Luxury Announcement Bar** — Shipping thresholds and return policies surfaced in the navbar

#### 🛍️ **Shopping Experience**
- **Product Collection** — Browse 50+ products across Men, Women, and Kids categories
- **Category & Sub-category Filtering** — Filter by Topwear, Bottomwear, and Winterwear
- **Sorting Options** — Sort by relevance, price low-to-high, and price high-to-low
- **Grid / List View Toggle** — Switch between product display modes
- **Live Search** — Real-time product search via the persistent search bar
- **Product Detail Page** — Multiple images, size selection, related products, and star ratings
- **Size Validation** — Prevents cart additions without a selected size

#### 🛒 **Cart & Checkout**
- **Persistent Cart** — Cart synced to the backend for authenticated users; localStorage fallback for guests
- **Quantity Management** — Inline quantity update and item removal
- **Cart Summary** — Real-time subtotal and delivery fee breakdown
- **Delivery Address Form** — Full shipping address collection at checkout
- **Payment Method Selection** — Choose between COD, Stripe, or Razorpay at checkout
- **Free Shipping Promotion** — Complimentary shipping on orders above ₹999

#### 👤 **User Account**
- **Register & Login** — Secure account creation and authentication
- **Order History** — View all past orders with status tracking
- **Payment Verification** — Redirect-based Stripe and Razorpay verification flow
- **Session Persistence** — JWT token stored in localStorage for seamless re-login

---

### 👨‍💼 **Admin Panel Features**

#### 📦 **Product Management**
- **Add Products** — Upload up to 4 product images, set name, description, price, category, sub-category, available sizes, and bestseller flag
- **Product Listing** — Paginated table of all products with quick-delete
- **Cloudinary Integration** — Images uploaded directly to Cloudinary on product creation

#### 📋 **Order Management**
- **All Orders View** — See every order placed on the platform in reverse-chronological order
- **Status Filtering** — Filter orders by status (Order Placed, Packing, Shipped, Out for Delivery, Delivered)
- **Search Orders** — Search across order IDs and customer details
- **Status Updates** — Update individual order statuses from a dropdown

#### 🔐 **Admin Authentication**
- **Separate Login** — Admin credentials are environment-variable-controlled, independent of the user database
- **Token-Gated Routes** — All admin API endpoints are protected by `adminAuth` middleware

---

## 🛠️ Tech Stack

### 🎨 **Frontend (Customer App)**
```
React 18.3.1           - UI library
Vite 5.4.9             - Build tool & dev server
Tailwind CSS 3.4.14    - Utility-first styling
React Router DOM 6.27.0 - Client-side routing
Axios 1.7.7            - HTTP client
React Toastify 10.0.6  - Toast notifications
Lucide React 0.469.0   - Icon library
```

### 🖥️ **Admin Panel**
```
React 18.3.1           - UI library
Vite 5.4.10            - Build tool & dev server
Tailwind CSS 3.4.14    - Utility-first styling
React Router DOM 6.28.0 - Client-side routing
Axios 1.7.7            - HTTP client
React Toastify 10.0.6  - Toast notifications
Lucide React 0.469.0   - Icon library
```

### ⚙️ **Backend**
```
Node.js + Express 4.21.1  - Server framework (ES Modules)
MongoDB + Mongoose 8.8.0  - Database & ODM
JWT 9.0.2                 - Authentication tokens
bcrypt 5.1.1              - Password hashing
Multer 1.4.5-lts.1        - Multipart file upload handling
Cloudinary 2.5.1          - Cloud image storage
Stripe 16.12.0            - Stripe payment gateway
Razorpay 2.9.5            - Razorpay payment gateway
validator 13.12.0         - Input validation
dotenv 16.4.5             - Environment variable management
cors 2.8.5                - Cross-Origin Resource Sharing
nodemon 3.1.7             - Development hot-reload
```

### 🔧 **External Services**
```
Cloudinary             - Product image hosting & CDN
Stripe                 - International card payment processing
Razorpay               - Domestic (INR) payment processing
Vercel                 - Hosting & serverless deployment (all three apps)
MongoDB Atlas          - Managed cloud database (recommended)
```

---

## 🏗️ Project Structure

```
EcomProject/
├── 📁 backend/                     # Node.js REST API
│   ├── 📁 config/
│   │   ├── cloudinary.js           # Cloudinary SDK configuration
│   │   └── mongodb.js              # Mongoose connection
│   ├── 📁 controllers/
│   │   ├── cartController.js       # Cart CRUD logic
│   │   ├── orderController.js      # Order placement & payment verification
│   │   ├── productController.js    # Product CRUD logic
│   │   └── userController.js       # Auth: register, login, admin login
│   ├── 📁 middleware/
│   │   ├── auth.js                 # JWT user authentication middleware
│   │   ├── adminAuth.js            # JWT admin authentication middleware
│   │   └── multer.js               # File upload middleware
│   ├── 📁 models/
│   │   ├── productModel.js         # Product Mongoose schema
│   │   ├── userModel.js            # User Mongoose schema (with cartData)
│   │   └── orderModel.js           # Order Mongoose schema
│   ├── 📁 routes/
│   │   ├── userRoute.js            # /api/user endpoints
│   │   ├── productRoute.js         # /api/product endpoints
│   │   ├── cartRoute.js            # /api/cart endpoints
│   │   └── orderRoute.js           # /api/order endpoints
│   ├── server.js                   # Express app entry point
│   ├── vercel.json                 # Vercel deployment config
│   └── package.json
│
├── 📁 frontend/                    # Customer-facing React app
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── Navbar.jsx          # Sticky nav with cart counter & search
│   │   │   ├── Hero.jsx            # Landing hero banner
│   │   │   ├── BestSeller.jsx      # Best seller product grid
│   │   │   ├── LatestCollection.jsx # New arrivals section
│   │   │   ├── ProductItem.jsx     # Reusable product card
│   │   │   ├── CartTotal.jsx       # Order summary widget
│   │   │   ├── SearchBar.jsx       # Global search overlay
│   │   │   ├── RelatedProducts.jsx # Related products section
│   │   │   ├── NewsLetterBox.jsx   # Email subscription form
│   │   │   ├── OurPolicy.jsx       # Policy badges (exchange, returns, support)
│   │   │   ├── Footer.jsx          # Site footer
│   │   │   └── Title.jsx           # Section title component
│   │   ├── 📁 context/
│   │   │   └── ShopContext.jsx     # Global state (cart, products, auth, search)
│   │   ├── 📁 pages/
│   │   │   ├── Home.jsx            # Homepage
│   │   │   ├── Collection.jsx      # Browse & filter all products
│   │   │   ├── Product.jsx         # Individual product detail
│   │   │   ├── Cart.jsx            # Shopping cart
│   │   │   ├── PlaceOrder.jsx      # Checkout & payment selection
│   │   │   ├── Orders.jsx          # User order history
│   │   │   ├── Login.jsx           # Login / Register form
│   │   │   ├── About.jsx           # About page
│   │   │   ├── Contact.jsx         # Contact page
│   │   │   └── Verify.jsx          # Payment verification callback
│   │   └── 📁 assets/              # Static images, product data
│   ├── vercel.json
│   └── package.json
│
└── 📁 admin/                       # Admin panel React app
    ├── 📁 src/
    │   ├── 📁 components/
    │   │   ├── Login.jsx           # Admin login form
    │   │   ├── Navbar.jsx          # Admin top bar with logout
    │   │   └── Sidebar.jsx         # Navigation: Add / List / Orders
    │   ├── 📁 pages/
    │   │   ├── Add.jsx             # Add new product form
    │   │   ├── List.jsx            # All products table
    │   │   └── Orders.jsx          # All orders with status management
    │   └── App.jsx                 # Admin router & auth gate
    ├── vercel.json
    └── package.json
```

---

## 🚀 Quick Start

### 📋 Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local or MongoDB Atlas)
- **npm** or **yarn**
- **Cloudinary** account (free tier works)
- **Stripe** account (test mode)
- **Razorpay** account (test mode)

### ⚡ Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/EcomProject.git
cd EcomProject
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

4. **Install Admin Dependencies**
```bash
cd ../admin
npm install
```

5. **Set up Environment Variables** (see [Environment Setup](#-environment-setup))

6. **Start all three servers** (in separate terminals)

```bash
# Terminal 1 — Backend
cd backend
npm run server        # uses nodemon for hot-reload

# Terminal 2 — Frontend
cd frontend
npm run dev

# Terminal 3 — Admin
cd admin
npm run dev
```

7. **Access the Applications**

| App | URL |
|-----|-----|
| Frontend (Customer) | `http://localhost:5173` |
| Admin Panel | `http://localhost:5174` |
| Backend API | `http://localhost:4000` |

---

## 🔧 Environment Setup

### 🔐 Backend Environment Variables

Create `backend/.env`:

```env
# Server
PORT=4000

# Database
MONGODB_URI=mongodb://localhost:27017/ecomshop
# or your MongoDB Atlas connection string

# Authentication
JWT_SECRET=your_super_secret_jwt_key

# Admin Credentials (used for admin login)
ADMIN_EMAIL=admin@ecomshop.com
ADMIN_PASSWORD=your_admin_password

# Cloudinary (Image Storage)
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_api_secret

# Stripe Payment
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# Razorpay Payment
RAZORPAY_KEY_ID=rzp_test_your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 🎨 Frontend Environment Variables

Create `frontend/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=rzp_test_your_razorpay_key_id
```

### 🖥️ Admin Environment Variables

Create `admin/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 📚 API Documentation

All endpoints are prefixed with `/api`. The backend runs on port `4000` by default.

### 🔐 User Routes — `/api/user`

```
POST   /api/user/register     # Register a new customer account
POST   /api/user/login        # Customer login → returns JWT token
POST   /api/user/admin        # Admin login → returns admin JWT token
```

### 📦 Product Routes — `/api/product`

```
GET    /api/product/list            # Get all products (public)
POST   /api/product/single          # Get single product by ID (public)

# Admin only (requires adminAuth token header)
POST   /api/product/add             # Add product with up to 4 images
POST   /api/product/remove          # Delete a product by ID
```

### 🛒 Cart Routes — `/api/cart`

> All routes require a valid user JWT token in the `token` header.

```
POST   /api/cart/get        # Fetch the authenticated user's cart
POST   /api/cart/add        # Add item (itemId + size) to cart
POST   /api/cart/update     # Update item quantity in cart
```

### 📋 Order Routes — `/api/order`

```
# Customer routes (require user auth token)
POST   /api/order/place           # Place order with Cash on Delivery
POST   /api/order/stripe          # Place order & create Stripe checkout session
POST   /api/order/razorpay        # Place order & create Razorpay order
POST   /api/order/userorders      # Get all orders for the logged-in user
POST   /api/order/verifyStripe    # Verify Stripe payment after redirect
POST   /api/order/verifyRazorpay  # Verify Razorpay payment after callback

# Admin routes (require adminAuth token)
POST   /api/order/list            # Get all orders (admin view)
POST   /api/order/status          # Update order status
```

---

## 🧩 UI Components

### **Navbar**
Sticky top navigation with luxury announcement bar, cart item counter, live search trigger, and user account dropdown. Fully responsive with a hamburger menu for mobile.

### **Hero**
Full-width hero section with promotional imagery and CTA buttons driving traffic to the collection page.

### **ProductItem**
Reusable product card with hover effects, price display, and navigation to the product detail page.

### **SearchBar**
Overlay search bar that filters the product catalogue in real time as the user types.

### **CartTotal**
Order summary component displaying subtotal, delivery fee, and total, used both on the cart page and at checkout.

### **OurPolicy**
Icon-and-text policy display (easy exchange, returns, 24/7 customer support), reinforcing buyer confidence.

### **NewsLetterBox**
Email subscription form with input validation and success toast notification.

---

## 💳 Payment Integration

EcomShop supports three payment methods, selectable by the customer at checkout.

### 💵 Cash on Delivery (COD)
Order is saved immediately with `payment: false`. No external gateway involved. Admin can update the status manually as the order progresses.

### 💳 Stripe

1. Customer selects Stripe at checkout
2. Backend creates a Stripe Checkout Session with line items
3. Customer is redirected to the Stripe-hosted payment page
4. On success/failure, Stripe redirects to `/verify?success=true&orderId=...`
5. The `Verify` page calls `/api/order/verifyStripe` to confirm and clear the cart

### 📱 Razorpay

1. Customer selects Razorpay at checkout
2. Backend creates a Razorpay order
3. Razorpay modal opens inline via the Razorpay JavaScript SDK
4. On payment success, the handler calls `/api/order/verifyRazorpay`
5. Backend fetches the order status from Razorpay and marks the order as paid

### 💰 Pricing & Fees

| | |
|---|---|
| **Delivery Fee** | ₹10 flat rate |
| **Free Shipping Threshold** | Orders above ₹999 |
| **Currency** | INR (₹) |

---

## 👨‍💼 Admin Panel

Access the admin panel at `http://localhost:5174`. On first load you will see the login screen — use the credentials set in `ADMIN_EMAIL` and `ADMIN_PASSWORD` in your backend `.env`.

### ➕ Add Product (`/add`)
Fill in the product name, description, price, category (Men / Women / Kids), sub-category (Topwear / Bottomwear / Winterwear), available sizes (XS → XXL), upload up to four images, and toggle the bestseller flag. Images are uploaded to Cloudinary on submission.

### 📃 Product List (`/list`)
Table view of all products showing image, name, category, and price. Each row has a **Delete** button for instant removal.

### 📦 Orders (`/orders`)
Complete list of all customer orders in reverse-chronological order. Each order card shows:
- Customer shipping address & phone
- Ordered items with sizes and quantities
- Payment method and payment status
- Order date and total amount
- Status dropdown to advance the order through its lifecycle

**Order Status Flow:**

```
Order Placed → Packing → Shipped → Out for Delivery → Delivered
```

---

## 🔒 Authentication & Security

### 🛡️ User Authentication
- Passwords hashed with **bcrypt** (10 salt rounds) before storage
- JWT tokens signed with `JWT_SECRET` and stored client-side in `localStorage`
- All protected customer routes use the `authUser` middleware, which verifies the token and injects `userId` into `req.body`
- Input validated using the **validator** library (email format, minimum password length)

### 🔐 Admin Authentication
- Admin credentials are environment variables — no admin record in the database
- Admin JWT is signed from `ADMIN_EMAIL + ADMIN_PASSWORD` concatenation
- The `adminAuth` middleware decodes and re-validates this combined string on every protected admin request

### 🌐 CORS
CORS headers are set globally to `*` via custom middleware, permitting both the frontend and admin origins without a fixed allowlist. Preflight `OPTIONS` requests return `204` immediately.

### 🖼️ File Upload Security
- Multer restricts uploads to image files (jpeg, jpg, png, webp, gif)
- Images are forwarded to Cloudinary immediately; no files are written to the server's disk in production

---

## 🚢 Deployment

All three applications include a `vercel.json` and are designed for **zero-configuration Vercel deployment**.

### Backend
The `vercel.json` uses `@vercel/node` to wrap `server.js` as a serverless function. All routes are rewritten to `server.js`.

```bash
cd backend
vercel --prod
```

### Frontend & Admin
Both are standard Vite SPAs with a catch-all rewrite to `/` for client-side routing.

```bash
# From the frontend or admin directory:
vercel --prod
```

After deploying the backend, update `VITE_BACKEND_URL` in the frontend and admin environment variables to point to the production backend URL before their final build.

### Environment Variables on Vercel
Add all variables from the `.env` files above via the Vercel project dashboard under **Settings → Environment Variables**.

---

## 🏷️ Product Categories

| Category | Sub-categories |
|----------|----------------|
| Men | Topwear, Bottomwear, Winterwear |
| Women | Topwear, Bottomwear, Winterwear |
| Kids | Topwear, Bottomwear, Winterwear |

---

## 🙏 Acknowledgments

- **Cloudinary** — Image hosting and CDN delivery
- **Stripe** — Secure international card payment processing
- **Razorpay** — Domestic INR payment gateway
- **MongoDB Atlas** — Managed cloud database
- **Vercel** — Hosting and serverless deployment

---

<div align="center">

**Made with ❤️ for EcomShop**

</div>
