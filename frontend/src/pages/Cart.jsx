import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Heart, Crown } from 'lucide-react'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const tempData = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData)
    }
  }, [cartItems, products])

  if (cartData.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 pt-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center py-20">
          <div className="w-32 h-32 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="w-16 h-16 text-neutral-400" strokeWidth={1} />
          </div>
          <h2 className="font-display text-4xl font-bold text-primary-900 mb-4">Your Cart is Empty</h2>
          <p className="text-neutral-600 text-lg mb-8 max-w-md mx-auto">
            Discover our premium collection and add some luxury pieces to your cart
          </p>
          <button
            onClick={() => navigate('/collection')}
            className="btn-primary text-lg group"
          >
            Explore Collection
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center bg-accent-50 rounded-full px-6 py-3 mb-6">
            <ShoppingBag className="w-5 h-5 text-accent-600 mr-2" />
            <span className="font-semibold text-accent-800 tracking-wide uppercase">Your Selection</span>
          </div>
          
          <Title 
            text1="SHOPPING" 
            text2="CART"
            subtitle="Review your carefully selected premium fashion pieces before checkout"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          
          {/* Cart Items */}
          <div className="xl:col-span-2 space-y-6">
            {cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id)

              return (
                <div key={index} className="bg-white rounded-3xl shadow-luxury border border-neutral-100 overflow-hidden hover:shadow-luxury-lg transition-all duration-300">
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row gap-6">
                      
                      {/* Product Image */}
                      <div className="relative">
                        <div className="w-32 h-32 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl overflow-hidden">
                          <img 
                            src={productData.image[0]} 
                            alt={productData.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          onClick={() => updateQuantity(item._id, item.size, 0)}
                          className="absolute -top-2 -right-2 w-8 h-8 bg-error-500 text-white rounded-full flex items-center justify-center hover:bg-error-600 transition-colors duration-200 shadow-lg"
                        >
                          <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-xl text-primary-900 mb-2">{productData.name}</h3>
                            <div className="flex items-center space-x-4">
                              <span className="font-display text-2xl font-bold text-primary-900">{currency}{productData.price}</span>
                              <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-semibold">
                                Size: {item.size}
                              </span>
                            </div>
                          </div>
                          
                          <button className="p-2 text-neutral-400 hover:text-accent-600 transition-colors duration-200">
                            <Heart className="w-5 h-5" strokeWidth={1.5} />
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center bg-neutral-100 rounded-2xl p-1">
                            <button
                              onClick={() => updateQuantity(item._id, item.size, Math.max(1, item.quantity - 1))}
                              className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-neutral-600 hover:text-primary-900 transition-colors duration-200 shadow-soft"
                            >
                              <Minus className="w-4 h-4" strokeWidth={1.5} />
                            </button>
                            
                            <input
                              onChange={(e) => {
                                const value = e.target.value
                                if (value === '' || value === '0') return
                                updateQuantity(item._id, item.size, Number(value))
                              }}
                              className="w-16 text-center bg-transparent border-0 focus:outline-none font-semibold text-primary-900"
                              type="number"
                              min={1}
                              value={item.quantity}
                            />
                            
                            <button
                              onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                              className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-neutral-600 hover:text-primary-900 transition-colors duration-200 shadow-soft"
                            >
                              <Plus className="w-4 h-4" strokeWidth={1.5} />
                            </button>
                          </div>

                          <div className="text-right">
                            <div className="font-display text-xl font-bold text-primary-900">
                              {currency}{productData.price * item.quantity}
                            </div>
                            <div className="text-sm text-neutral-500">
                              {currency}{productData.price} each
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Cart Summary */}
          <div className="xl:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white rounded-3xl shadow-luxury border border-neutral-100 overflow-hidden">
                
                {/* Summary Header */}
                <div className="bg-gradient-to-r from-primary-900 to-accent-600 text-white p-8 text-center">
                  <Crown className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-display text-2xl font-bold mb-2">Order Summary</h3>
                  <p className="text-primary-100">Review your premium selection</p>
                </div>

                <div className="p-8">
                  <CartTotal />
                  
                  <div className="mt-8 space-y-4">
                    <button
                      onClick={() => navigate('/place-order')}
                      className="w-full bg-gradient-to-r from-primary-900 to-accent-600 text-white py-5 rounded-2xl font-semibold text-lg tracking-wide transition-all duration-300 hover:from-primary-800 hover:to-accent-500 hover:shadow-luxury hover:scale-105 group"
                    >
                      Proceed to Checkout
                      <ArrowRight className="w-5 h-5 ml-3 inline group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                    
                    <button
                      onClick={() => navigate('/collection')}
                      className="w-full bg-white border-2 border-primary-200 text-primary-900 py-4 rounded-2xl font-semibold transition-all duration-300 hover:border-primary-300 hover:shadow-lg"
                    >
                      Continue Shopping
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-8 pt-6 border-t border-neutral-100 space-y-3">
                    <div className="flex items-center text-sm text-neutral-600">
                      <Crown className="w-4 h-4 text-accent-600 mr-2" />
                      <span>Premium quality guarantee</span>
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <Truck className="w-4 h-4 text-success-600 mr-2" />
                      <span>Free shipping on orders above ₹999</span>
                    </div>
                    <div className="flex items-center text-sm text-neutral-600">
                      <RotateCcw className="w-4 h-4 text-primary-600 mr-2" />
                      <span>30-day hassle-free returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart