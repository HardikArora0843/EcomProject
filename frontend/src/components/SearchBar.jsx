import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom'
import { Search, X, Filter, Sparkles, TrendingUp } from 'lucide-react'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location])

  const popularSearches = [
    { term: 'Premium T-shirts', trending: true },
    { term: 'Designer Jeans', trending: false },
    { term: 'Luxury Dresses', trending: true },
    { term: 'Premium Footwear', trending: false },
    { term: 'Accessories', trending: false }
  ]

  return showSearch && visible ? (
    <div className="bg-white/95 backdrop-blur-luxury border-b border-neutral-100 sticky top-[93px] z-40 shadow-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        
        {/* Search Header */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-semibold text-primary-900 mb-2">Find Your Perfect Style</h3>
          <p className="text-neutral-600">Search through our curated collection of premium fashion</p>
        </div>

        <div className="flex items-center justify-center gap-6">
          
          {/* Luxury Search Input */}
          <div className="relative max-w-2xl w-full">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-neutral-400" strokeWidth={1.5} />
            </div>
            
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for premium fashion items..."
              className="w-full pl-16 pr-16 py-5 border-2 border-neutral-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-300 bg-white shadow-soft text-lg placeholder-neutral-400"
            />
            
            <div className="absolute inset-y-0 right-0 pr-6 flex items-center space-x-2">
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="p-1 text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
              <button
                onClick={() => setShowSearch(false)}
                className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Luxury Filter Button */}
          <button className="p-5 bg-gradient-to-r from-primary-900 to-accent-600 hover:from-primary-800 hover:to-accent-500 text-white rounded-2xl transition-all duration-300 shadow-luxury hover:shadow-luxury-lg hover:scale-105">
            <Filter className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>

        {/* Popular Searches */}
        {!search && (
          <div className="mt-10 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-neutral-100">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-5 h-5 text-accent-600 mr-2" />
              <span className="font-semibold text-primary-900 tracking-wide">TRENDING SEARCHES</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSearch(item.term)}
                  className="group relative px-6 py-3 bg-white hover:bg-accent-50 border border-neutral-200 hover:border-accent-300 rounded-xl text-sm font-medium text-neutral-700 hover:text-accent-700 transition-all duration-300 shadow-soft hover:shadow-medium"
                >
                  <span className="flex items-center">
                    {item.trending && <Sparkles className="w-3 h-3 text-accent-500 mr-2" />}
                    {item.term}
                  </span>
                  {item.trending && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results Preview */}
        {search && (
          <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-luxury border border-neutral-100 overflow-hidden">
            <div className="p-6 border-b border-neutral-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Search className="w-5 h-5 text-accent-600" />
                  <span className="font-semibold text-primary-900">Search Results</span>
                </div>
                <span className="text-sm text-neutral-500">Found 24 premium items</span>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-neutral-600 text-center">
                Press Enter or click the filter button to view all results
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null
}

export default SearchBar