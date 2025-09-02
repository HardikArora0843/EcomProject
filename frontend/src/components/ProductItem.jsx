import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { Heart, Eye, ShoppingBag, Star, Sparkles } from 'lucide-react'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div 
      className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <Link to={`/product/${id}`} className="block relative overflow-hidden">
        <div className="aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 relative">
          <img 
            src={image[0]} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Luxury overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-4 transform transition-all duration-500 ${isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                <Eye className="w-6 h-6 text-primary-900" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Premium badge */}
          <div className="absolute top-4 left-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-3 py-2 rounded-full flex items-center shadow-lg">
            <Sparkles className="w-3 h-3 mr-1" />
            PREMIUM
          </div>
        </div>

        {/* Luxury action buttons */}
        <div className={`absolute top-4 right-4 flex flex-col gap-3 transform transition-all duration-500 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
            className={`p-3 rounded-2xl backdrop-blur-sm transition-all duration-300 shadow-lg ${isLiked ? 'bg-accent-500 text-white scale-110' : 'bg-white/95 text-neutral-700 hover:bg-accent-50 hover:text-accent-600 hover:scale-110'}`}
          >
            <Heart className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} strokeWidth={1.5} />
          </button>
          
          <button className="p-3 bg-white/95 backdrop-blur-sm rounded-2xl text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 shadow-lg hover:scale-110">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-lg text-primary-900 mb-3 line-clamp-2 group-hover:text-accent-600 transition-colors duration-300 leading-tight">
            {name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-accent-500" fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-sm text-neutral-500 font-medium">(4.8)</span>
          <span className="text-xs text-neutral-400">• 127 reviews</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-display font-bold text-primary-900">{currency}{price}</span>
            <span className="text-lg text-neutral-400 line-through">{currency}{price + 100}</span>
          </div>
          <div className="bg-accent-100 text-accent-800 text-xs font-bold px-3 py-1 rounded-full">
            SAVE 20%
          </div>
        </div>

        {/* Luxury CTA */}
        <button className={`w-full py-4 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-500 ${isHovered ? 'bg-gradient-to-r from-primary-900 to-accent-600 text-white shadow-luxury' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}>
          {isHovered ? 'Add to Collection' : 'View Details'}
        </button>
      </div>

      {/* Luxury shine effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}></div>
    </div>
  )
}

export default ProductItem