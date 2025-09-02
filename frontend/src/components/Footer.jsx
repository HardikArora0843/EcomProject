import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Crown, Sparkles, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-900 via-neutral-900 to-accent-900 text-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-accent-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Luxury Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-700 rounded-3xl flex items-center justify-center shadow-luxury">
                    <span className="text-white font-display text-2xl font-bold">S</span>
                  </div>
                  <Crown className="absolute -top-2 -right-2 w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <span className="font-display text-3xl font-bold">SanjayShop</span>
                  <div className="text-accent-300 text-sm tracking-widest uppercase">Premium Fashion House</div>
                </div>
              </div>
              
              <p className="text-primary-100 mb-8 max-w-lg leading-relaxed text-lg">
                Where luxury meets accessibility. We curate exceptional fashion pieces that embody 
                timeless elegance and contemporary sophistication, delivering an unparalleled shopping experience.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-accent-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-luxury">
                  <Facebook className="w-6 h-6" strokeWidth={1.5} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-accent-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-luxury">
                  <Instagram className="w-6 h-6" strokeWidth={1.5} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-accent-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-luxury">
                  <Twitter className="w-6 h-6" strokeWidth={1.5} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-accent-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-luxury">
                  <Youtube className="w-6 h-6" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-xl font-semibold mb-8 flex items-center">
                <Sparkles className="w-5 h-5 text-accent-400 mr-2" />
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li><a href="/" className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  Home
                </a></li>
                <li><a href="/collection" className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  Collection
                </a></li>
                <li><a href="/about" className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  About Us
                </a></li>
                <li><a href="/contact" className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  Contact
                </a></li>
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  Size Guide
                </a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h3 className="font-display text-xl font-semibold mb-8 flex items-center">
                <Heart className="w-5 h-5 text-accent-400 mr-2" />
                Customer Care
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  Shipping Information
                </a></li>
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  Returns & Exchanges
                </a></li>
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  Privacy Policy
                </a></li>
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  Terms of Service
                </a></li>
                <li><a href="#" className="text-primary-200 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></span>
                  Order Tracking
                </a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Luxury Contact Section */}
        <div className="border-t border-white/10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center shadow-luxury">
                <MapPin className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-semibold text-lg">Flagship Store</div>
                <div className="text-primary-200 text-sm leading-relaxed">1-F/112 N.I.T Faridabad<br />Haryana, India</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-luxury">
                <Phone className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-semibold text-lg">Premium Support</div>
                <div className="text-primary-200 text-sm">+91-9953782948</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-success-500 to-success-700 rounded-2xl flex items-center justify-center shadow-luxury">
                <Mail className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-semibold text-lg">Concierge Service</div>
                <div className="text-primary-200 text-sm">contact@sanjaysales.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-12">
          <div className="text-center">
            <div className="inline-flex items-center mb-6">
              <Crown className="w-6 h-6 text-accent-400 mr-3" />
              <h3 className="font-display text-2xl font-bold">Join Our VIP Circle</h3>
              <Crown className="w-6 h-6 text-accent-400 ml-3" />
            </div>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Gain exclusive access to private sales, style consultations, and be the first to discover our latest luxury arrivals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email for VIP access"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent-500/30 focus:border-accent-400 text-white placeholder-primary-200 transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-accent-500 to-accent-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-accent-600 hover:to-accent-800 transition-all duration-300 shadow-luxury hover:shadow-luxury-lg hover:scale-105">
                Join VIP
              </button>
            </div>

            <div className="mt-6 text-primary-200 text-sm flex items-center justify-center space-x-6">
              <span className="flex items-center"><Crown className="w-4 h-4 mr-1" /> Exclusive Access</span>
              <span className="flex items-center"><Sparkles className="w-4 h-4 mr-1" /> Early Previews</span>
              <span className="flex items-center"><Heart className="w-4 h-4 mr-1" /> Personal Styling</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-300 text-sm mb-4 md:mb-0 flex items-center">
              <Crown className="w-4 h-4 mr-2 text-accent-400" />
              © 2024 SanjayShop. Crafted with excellence. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-primary-300">
              <a href="#" className="hover:text-white transition-colors duration-200 hover:underline">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200 hover:underline">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200 hover:underline">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer