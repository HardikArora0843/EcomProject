import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { Package, Search, Filter, Trash2, Edit, Eye, Crown, Star } from 'lucide-react'

const List = ({ token }) => {
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products.reverse())
        setFilteredList(response.data.products.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // Filter products based on search and category
  useEffect(() => {
    let filtered = list

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (categoryFilter !== 'All') {
      filtered = filtered.filter(item => item.category === categoryFilter)
    }

    setFilteredList(filtered)
  }, [searchTerm, categoryFilter, list])

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className="max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-admin-accent-600 to-admin-accent-700 rounded-2xl flex items-center justify-center">
            <Package className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-admin-primary-900">Product Inventory</h1>
            <p className="text-admin-primary-600">Manage your premium product collection</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="dashboard-stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-admin-primary-600 text-sm font-medium">Total Products</p>
                <p className="text-2xl font-bold text-admin-primary-900">{list.length}</p>
              </div>
              <Package className="w-8 h-8 text-admin-accent-600" />
            </div>
          </div>
          
          <div className="dashboard-stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-admin-primary-600 text-sm font-medium">Bestsellers</p>
                <p className="text-2xl font-bold text-admin-primary-900">{list.filter(item => item.bestseller).length}</p>
              </div>
              <Crown className="w-8 h-8 text-admin-accent-600" />
            </div>
          </div>
          
          <div className="dashboard-stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-admin-primary-600 text-sm font-medium">Categories</p>
                <p className="text-2xl font-bold text-admin-primary-900">3</p>
              </div>
              <Filter className="w-8 h-8 text-admin-accent-600" />
            </div>
          </div>
          
          <div className="dashboard-stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-admin-primary-600 text-sm font-medium">Avg. Price</p>
                <p className="text-2xl font-bold text-admin-primary-900">₹{Math.round(list.reduce((acc, item) => acc + item.price, 0) / list.length) || 0}</p>
              </div>
              <Star className="w-8 h-8 text-admin-accent-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="admin-card p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-admin-primary-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="admin-input pl-12"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-admin-primary-400" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="admin-select pl-12 min-w-48"
            >
              <option value="All">All Categories</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="admin-table">
        
        {/* Table Header */}
        <div className="admin-table-header">
          <div className="grid grid-cols-[80px_1fr_120px_120px_120px_100px] gap-4 items-center py-4 px-6 font-semibold text-admin-primary-700">
            <div>Image</div>
            <div>Product Details</div>
            <div>Category</div>
            <div>Price</div>
            <div>Status</div>
            <div className="text-center">Actions</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-admin-primary-100">
          {filteredList.map((item, index) => (
            <div key={index} className="admin-table-row">
              <div className="grid grid-cols-[80px_1fr_120px_120px_120px_100px] gap-4 items-center py-4 px-6">
                
                {/* Product Image */}
                <div className="w-16 h-16 bg-admin-primary-50 rounded-xl overflow-hidden">
                  <img 
                    src={item.image[0]} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div>
                  <h3 className="font-semibold text-admin-primary-900 mb-1 line-clamp-1">{item.name}</h3>
                  <p className="text-sm text-admin-primary-600 line-clamp-2">{item.description}</p>
                  {item.bestseller && (
                    <div className="inline-flex items-center bg-admin-accent-50 text-admin-accent-700 px-2 py-1 rounded-full text-xs font-semibold mt-2">
                      <Crown className="w-3 h-3 mr-1" />
                      Bestseller
                    </div>
                  )}
                </div>

                {/* Category */}
                <div>
                  <span className="status-badge bg-admin-info-50 text-admin-info-600">
                    {item.category}
                  </span>
                  <div className="text-xs text-admin-primary-500 mt-1">{item.subCategory}</div>
                </div>

                {/* Price */}
                <div>
                  <span className="font-bold text-admin-primary-900 text-lg">{currency}{item.price}</span>
                </div>

                {/* Status */}
                <div>
                  <span className="status-badge status-success">
                    Active
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-center space-x-2">
                  <button className="p-2 text-admin-accent-600 hover:bg-admin-accent-50 rounded-lg transition-all duration-200">
                    <Eye className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                  <button className="p-2 text-admin-warning-600 hover:bg-admin-warning-50 rounded-lg transition-all duration-200">
                    <Edit className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={() => removeProduct(item._id)}
                    className="p-2 text-admin-error-600 hover:bg-admin-error-50 rounded-lg transition-all duration-200"
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredList.length === 0 && (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-admin-primary-300 mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-admin-primary-900 mb-2">No products found</h3>
            <p className="text-admin-primary-600 mb-6">
              {searchTerm || categoryFilter !== 'All' 
                ? 'Try adjusting your search or filter criteria' 
                : 'Start by adding your first premium product'
              }
            </p>
            {(!searchTerm && categoryFilter === 'All') && (
              <button className="admin-btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add First Product
              </button>
            )}
          </div>
        )}
      </div>

      {/* Pagination (if needed) */}
      {filteredList.length > 0 && (
        <div className="mt-8 flex justify-center">
          <div className="bg-white rounded-2xl shadow-admin-soft border border-admin-primary-100 px-6 py-3">
            <span className="text-admin-primary-600 text-sm">
              Showing {filteredList.length} of {list.length} products
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default List