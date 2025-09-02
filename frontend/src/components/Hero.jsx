import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Star, Truck, Shield, RotateCcw, Sparkles, Crown } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Main Hero Section */}
      <div className="bg-gradient-to-br from-neutral-50 via-primary-50 to-accent-50 relative">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-900 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-600 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-600 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center min-h-[700px] py-16 lg:py-0">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left mb-16 lg:mb-0 animate-fade-in-up">
              
              {/* Premium Badge */}
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-luxury border border-accent-200">
                <Crown className="w-5 h-5 text-accent-600 mr-3" />
                <span className="text-sm font-semibold text-primary-900 tracking-wide">PREMIUM FASHION DESTINATION</span>
                <Sparkles className="w-4 h-4 text-accent-500 ml-3" />
              </div>
              
              <h1 className="font-display text-display-lg lg:text-display-xl font-bold text-primary-900 leading-none mb-8">
                Elevate Your
                <span className="block text-gradient-luxury">
                  Style Journey
                </span>
              </h1>
              
              <p className="text-xl text-neutral-600 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Discover our meticulously curated collection of premium fashion pieces, 
                where timeless elegance meets contemporary sophistication.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
                <button className="btn-primary group text-base">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button className="btn-secondary text-base">
                  Style Guide
                </button>
              </div>

              {/* Luxury Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary-900 mb-1">50K+</div>
                  <div className="text-sm text-neutral-500 tracking-wide uppercase">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary-900 mb-1">1000+</div>
                  <div className="text-sm text-neutral-500 tracking-wide uppercase">Premium Items</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary-900 mb-1">4.9</div>
                  <div className="text-sm text-neutral-500 tracking-wide uppercase">Excellence Rating</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative animate-slide-in-right">
              <div className="relative max-w-lg mx-auto">
                
                {/* Main Image */}
                <div className="relative">
                  <img 
                    src={assets.hero_img} 
                    alt="Premium Fashion Collection" 
                    className="w-full rounded-3xl shadow-luxury-lg"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                </div>
                
                {/* Floating Premium Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-luxury animate-scale-in">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-sm font-semibold text-primary-900">New Arrivals</div>
                      <div className="text-xs text-neutral-500">Premium Collection</div>
                    </div>
                  </div>
                </div>
                
                {/* Quality Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-luxury animate-scale-in" style={{ animationDelay: '0.3s' }}>
                  <div className="text-sm font-semibold text-primary-900 mb-2">Premium Quality</div>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent-500" fill="currentColor" />
                    ))}
                  </div>
                  <div className="text-xs text-neutral-500">Rated by 10,000+ customers</div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full opacity-15 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Features Section */}
      <div className="bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="group text-center hover-lift">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-luxury transition-all duration-300">
                <Truck className="w-10 h-10 text-primary-700" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-900 mb-3">Complimentary Delivery</h3>
              <p className="text-neutral-600 leading-relaxed">Premium shipping service on all orders above ₹999 with white-glove delivery experience</p>
            </div>

            <div className="group text-center hover-lift">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-luxury transition-all duration-300">
                <RotateCcw className="w-10 h-10 text-accent-700" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-900 mb-3">Effortless Returns</h3>
              <p className="text-neutral-600 leading-relaxed">30-day hassle-free return policy with complimentary pickup and full refund guarantee</p>
            </div>

            <div className="group text-center hover-lift">
              <div className="w-20 h-20 bg-gradient-to-br from-success-100 to-success-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-luxury transition-all duration-300">
                <Shield className="w-10 h-10 text-success-700" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-900 mb-3">Secure Transactions</h3>
              <p className="text-neutral-600 leading-relaxed">Bank-level security with encrypted payments and comprehensive buyer protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero