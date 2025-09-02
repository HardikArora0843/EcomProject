import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import { Star, Heart, Share2, Truck, RotateCcw, ShieldCheck, Crown, Sparkles, Award } from 'lucide-react'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const [activeTab, setActiveTab] = useState('description')
  const [isLiked, setIsLiked] = useState(false)

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])
  
  return productData ? (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-100 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <span>Home</span>
            <span>/</span>
            <span>Collection</span>
            <span>/</span>
            <span className="text-primary-900 font-medium">{productData.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Product Images */}
          <div className="space-y-6">
            
            {/* Main Image */}
            <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl overflow-hidden shadow-luxury aspect-square">
              <img 
                className="w-full h-full object-cover" 
                src={image} 
                alt={productData.name}
              />
              
              {/* Premium Badge */}
              <div className="absolute top-6 left-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center shadow-lg">
                <Crown className="w-4 h-4 mr-2" />
                PREMIUM
              </div>

              {/* Action Buttons */}
              <div className="absolute top-6 right-6 flex flex-col space-y-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-3 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg ${isLiked ? 'bg-accent-500 text-white' : 'bg-white/90 text-neutral-700 hover:bg-accent-50'}`}
                >
                  <Heart className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} />
                </button>
                <button className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl text-neutral-700 hover:bg-primary-50 transition-all duration-300 shadow-lg">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {productData.image.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setImage(item)}
                  className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${image === item ? 'border-accent-500 shadow-lg scale-105' : 'border-neutral-200 hover:border-accent-300'}`}
                >
                  <img 
                    src={item} 
                    alt={`${productData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center bg-accent-50 rounded-full px-4 py-2 mb-4">
                <Award className="w-4 h-4 text-accent-600 mr-2" />
                <span className="text-sm font-semibold text-accent-800 tracking-wide uppercase">Premium Quality</span>
              </div>
              
              <h1 className="font-display text-4xl font-bold text-primary-900 mb-4 leading-tight">
                {productData.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500" fill="currentColor" />
                  ))}
                </div>
                <span className="text-neutral-600 font-medium">(4.8)</span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">127 reviews</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-6 border border-accent-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="font-display text-4xl font-bold text-primary-900">{currency}{productData.price}</span>
                  <span className="text-2xl text-neutral-400 line-through">{currency}{productData.price + 200}</span>
                </div>
                <div className="bg-accent-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  SAVE 25%
                </div>
              </div>
              <p className="text-neutral-600 mt-2">Inclusive of all taxes • Free shipping above ₹999</p>
            </div>

            {/* Description */}
            <div>
              <p className="text-neutral-700 text-lg leading-relaxed">{productData.description}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-primary-900 mb-4 text-lg">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`px-6 py-3 border-2 rounded-xl font-semibold transition-all duration-300 ${
                      item === size
                        ? 'border-accent-500 bg-accent-50 text-accent-700 shadow-lg scale-105'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-accent-300 hover:bg-accent-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                onClick={() => addToCart(productData._id, size)}
                className="w-full bg-gradient-to-r from-primary-900 to-accent-600 text-white py-5 rounded-2xl font-semibold text-lg tracking-wide transition-all duration-300 hover:from-primary-800 hover:to-accent-500 hover:shadow-luxury hover:scale-105 active:scale-95"
              >
                Add to Collection
              </button>
              
              <button className="w-full bg-white border-2 border-primary-200 text-primary-900 py-5 rounded-2xl font-semibold text-lg tracking-wide transition-all duration-300 hover:border-primary-300 hover:shadow-lg">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-soft border border-neutral-100 text-center">
                <Truck className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <div className="font-semibold text-primary-900 text-sm">Free Shipping</div>
                <div className="text-neutral-600 text-xs">On orders above ₹999</div>
              </div>
              
              <div className="bg-white rounded-2xl p-4 shadow-soft border border-neutral-100 text-center">
                <RotateCcw className="w-8 h-8 text-accent-600 mx-auto mb-2" />
                <div className="font-semibold text-primary-900 text-sm">Easy Returns</div>
                <div className="text-neutral-600 text-xs">30-day return policy</div>
              </div>
              
              <div className="bg-white rounded-2xl p-4 shadow-soft border border-neutral-100 text-center">
                <ShieldCheck className="w-8 h-8 text-success-600 mx-auto mb-2" />
                <div className="font-semibold text-primary-900 text-sm">Authentic</div>
                <div className="text-neutral-600 text-xs">100% genuine product</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl shadow-luxury border border-neutral-100 overflow-hidden">
            
            {/* Tab Headers */}
            <div className="flex border-b border-neutral-100">
              <button
                onClick={() => setActiveTab('description')}
                className={`flex-1 px-8 py-6 font-semibold transition-all duration-300 ${
                  activeTab === 'description'
                    ? 'bg-gradient-to-r from-primary-900 to-accent-600 text-white'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`flex-1 px-8 py-6 font-semibold transition-all duration-300 ${
                  activeTab === 'reviews'
                    ? 'bg-gradient-to-r from-primary-900 to-accent-600 text-white'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                Reviews (127)
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === 'description' ? (
                <div className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-neutral-700 leading-relaxed">
                      Experience the perfect blend of comfort and style with this meticulously crafted piece. 
                      Made from premium materials and designed with attention to every detail, this item represents 
                      the pinnacle of contemporary fashion.
                    </p>
                    <p className="text-neutral-700 leading-relaxed">
                      Our design team has carefully selected the finest fabrics and employed traditional craftsmanship 
                      techniques to ensure exceptional quality and durability. Each piece undergoes rigorous quality 
                      control to meet our exacting standards.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="bg-neutral-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-primary-900 mb-3">Material & Care</h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li>• Premium cotton blend fabric</li>
                        <li>• Machine washable at 30°C</li>
                        <li>• Do not bleach or tumble dry</li>
                        <li>• Iron on low heat if needed</li>
                      </ul>
                    </div>
                    
                    <div className="bg-neutral-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-primary-900 mb-3">Features</h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li>• Breathable and comfortable</li>
                        <li>• Durable construction</li>
                        <li>• Color-fast guarantee</li>
                        <li>• Ethically manufactured</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-2xl font-semibold text-primary-900">Customer Reviews</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-accent-500" fill="currentColor" />
                        ))}
                      </div>
                      <span className="font-semibold text-primary-900">4.8 out of 5</span>
                    </div>
                  </div>

                  {/* Sample Reviews */}
                  <div className="space-y-6">
                    {[
                      { name: 'Sarah M.', rating: 5, comment: 'Absolutely love this piece! The quality is exceptional and the fit is perfect. Will definitely be ordering more from this collection.' },
                      { name: 'David K.', rating: 5, comment: 'Outstanding quality and fast shipping. The attention to detail is remarkable. Highly recommend!' },
                      { name: 'Emma L.', rating: 4, comment: 'Beautiful design and great material. Slightly runs large but overall very satisfied with the purchase.' }
                    ].map((review, index) => (
                      <div key={index} className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                        <div className="flex items-center justify-between mb-3">
                          <div className="font-semibold text-primary-900">{review.name}</div>
                          <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-accent-500" fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <p className="text-neutral-700 leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-3xl shadow-luxury border border-neutral-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-success-100 to-success-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-success-600" />
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Authenticity Guaranteed</h4>
              <p className="text-neutral-600 text-sm">100% genuine products with authenticity certificate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Premium Delivery</h4>
              <p className="text-neutral-600 text-sm">White-glove delivery service with tracking</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Hassle-Free Returns</h4>
              <p className="text-neutral-600 text-sm">30-day return policy with complimentary pickup</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-neutral-600">Loading premium product details...</p>
      </div>
    </div>
  )
}

export default Product
