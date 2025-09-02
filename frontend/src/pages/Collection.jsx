import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { Filter, Grid, List, SlidersHorizontal, Sparkles, TrendingUp, Crown } from 'lucide-react'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')
  const [viewMode, setViewMode] = useState('grid')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }
    
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    
    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)))
        break
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)))
        break
      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    setFilterProducts(products)
  }, [])

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      
      {/* Luxury Header */}
      <div className="bg-gradient-to-r from-primary-900 to-accent-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-semibold tracking-wide uppercase">Premium Collection</span>
          </div>
          <h1 className="font-display text-5xl font-bold mb-4">Curated Fashion</h1>
          <p className="text-primary-100 text-xl max-w-2xl mx-auto">
            Explore our meticulously selected collection of premium fashion pieces
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Luxury Filter Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-3xl shadow-luxury border border-neutral-100 overflow-hidden sticky top-32">
              
              {/* Filter Header */}
              <div className="bg-gradient-to-r from-primary-900 to-accent-600 text-white p-6">
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center">
                    <SlidersHorizontal className="w-6 h-6 mr-3" />
                    <span className="font-display text-xl font-semibold">Filters</span>
                  </div>
                  <Filter className={`w-5 h-5 lg:hidden transition-transform duration-300 ${showFilter ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className={`${showFilter ? 'block' : 'hidden'} lg:block`}>
                
                {/* Categories */}
                <div className="p-6 border-b border-neutral-100">
                  <h3 className="font-semibold text-primary-900 mb-4 flex items-center">
                    <Crown className="w-4 h-4 text-accent-600 mr-2" />
                    Categories
                  </h3>
                  <div className="space-y-3">
                    {['Men', 'Women', 'Kids'].map((cat) => (
                      <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          value={cat}
                          onChange={toggleCategory}
                          className="w-5 h-5 text-accent-600 border-2 border-neutral-300 rounded focus:ring-accent-500 focus:ring-2"
                        />
                        <span className="text-neutral-700 group-hover:text-primary-900 transition-colors duration-200 font-medium">
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sub Categories */}
                <div className="p-6">
                  <h3 className="font-semibold text-primary-900 mb-4 flex items-center">
                    <TrendingUp className="w-4 h-4 text-accent-600 mr-2" />
                    Types
                  </h3>
                  <div className="space-y-3">
                    {['Topwear', 'Bottomwear', 'Winterwear'].map((subCat) => (
                      <label key={subCat} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          value={subCat}
                          onChange={toggleSubCategory}
                          className="w-5 h-5 text-accent-600 border-2 border-neutral-300 rounded focus:ring-accent-500 focus:ring-2"
                        />
                        <span className="text-neutral-700 group-hover:text-primary-900 transition-colors duration-200 font-medium">
                          {subCat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Section */}
          <div className="flex-1">
            
            {/* Controls Bar */}
            <div className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-6 mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                
                <div>
                  <h2 className="font-display text-2xl font-semibold text-primary-900 mb-1">
                    Premium Collection
                  </h2>
                  <p className="text-neutral-600">
                    {filterProducts.length} exquisite pieces found
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  
                  {/* View Mode Toggle */}
                  <div className="flex items-center bg-neutral-100 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-white shadow-soft text-primary-900' : 'text-neutral-600 hover:text-primary-900'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-white shadow-soft text-primary-900' : 'text-neutral-600 hover:text-primary-900'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <select
                    onChange={(e) => setSortType(e.target.value)}
                    className="bg-white border-2 border-neutral-200 rounded-xl px-4 py-3 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-200 font-medium"
                  >
                    <option value="relevant">Sort by: Relevance</option>
                    <option value="low-high">Price: Low to High</option>
                    <option value="high-low">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {filterProducts.map((item, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductItem
                    name={item.name}
                    id={item._id}
                    price={item.price}
                    image={item.image}
                  />
                </div>
              ))}
            </div>

            {/* No Results */}
            {filterProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-neutral-400" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary-900 mb-3">No items found</h3>
                <p className="text-neutral-600 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={() => {
                    setCategory([])
                    setSubCategory([])
                    setSortType('relevant')
                  }}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
