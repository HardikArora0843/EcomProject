import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 8))
  }, [products])

  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-accent-50 to-primary-50 rounded-full px-6 py-3 mb-8 shadow-soft">
            <TrendingUp className="w-5 h-5 text-accent-600 mr-3" />
            <span className="font-semibold text-primary-900 tracking-wide">FRESHLY CURATED</span>
            <Sparkles className="w-4 h-4 text-accent-500 ml-3" />
          </div>
          
          <Title 
            text1="LATEST" 
            text2="COLLECTION"
            subtitle="Discover our newest arrivals featuring the season's most coveted pieces, meticulously selected for the discerning fashion connoisseur who appreciates exceptional quality and timeless design."
            luxury={true}
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16">
          {latestProducts.map((item, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProductItem 
                id={item._id} 
                image={item.image} 
                name={item.name} 
                price={item.price}
              />
            </div>
          ))}
        </div>

        {/* Luxury CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-900 to-accent-600 rounded-3xl p-12 shadow-luxury-lg relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-3xl font-bold text-white mb-4">
                Explore Our Complete Collection
              </h3>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Immerse yourself in our full range of premium fashion pieces, each carefully selected to elevate your personal style.
              </p>
              <button className="bg-white text-primary-900 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-neutral-100 transition-all duration-300 hover:scale-105 shadow-luxury group">
                View All Products
                <ArrowRight className="w-5 h-5 ml-3 inline group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestCollection