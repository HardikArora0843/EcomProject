import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { TrendingUp, Award, Crown, Star } from 'lucide-react'

const BestSeller = () => {
  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller)
    setBestSeller(bestProduct.slice(0, 8))
  }, [products])

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-600 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-accent-100 to-primary-100 rounded-full px-8 py-4 mb-8 shadow-luxury border border-accent-200">
            <Crown className="w-6 h-6 text-accent-600 mr-3" />
            <span className="font-semibold text-primary-900 tracking-wide text-lg">CUSTOMER FAVORITES</span>
            <Award className="w-5 h-5 text-primary-600 ml-3" />
          </div>
          
          <Title 
            text1="BEST" 
            text2="SELLERS"
            subtitle="Our most coveted pieces, beloved by thousands of discerning customers worldwide. These exceptional items represent the pinnacle of style, craftsmanship, and enduring appeal."
            luxury={true}
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-20">
          {bestSeller.map((item, index) => (
            <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              
              {/* Luxury Bestseller Badge */}
              <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center shadow-luxury">
                <Crown className="w-3 h-3 mr-2" />
                <span className="tracking-wide">BESTSELLER</span>
              </div>
              
              {/* Sales Badge */}
              <div className="absolute top-4 right-4 z-20 bg-primary-900 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                #1 CHOICE
              </div>
              
              <ProductItem 
                id={item._id} 
                name={item.name} 
                image={item.image} 
                price={item.price}
              />
            </div>
          ))}
        </div>

        {/* Luxury CTA Section */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-luxury rounded-4xl p-12 shadow-luxury-lg border border-neutral-100 relative overflow-hidden">
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent-500 via-primary-600 to-accent-500"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center bg-accent-50 rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 text-accent-600 mr-2" fill="currentColor" />
                <span className="font-semibold text-accent-800 tracking-wide">JOIN 50,000+ SATISFIED CUSTOMERS</span>
              </div>
              
              <h3 className="font-display text-4xl font-bold text-primary-900 mb-6">
                Experience Luxury Fashion
              </h3>
              <p className="text-neutral-600 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Join our exclusive community of fashion enthusiasts and discover why these pieces have become the gold standard of contemporary style.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-accent text-lg group">
                  Shop Bestsellers
                  <Crown className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" />
                </button>
                <button className="btn-secondary text-lg">
                  View Customer Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSeller