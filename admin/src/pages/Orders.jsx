import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import { Package, Clock, Truck, CheckCircle, XCircle, Search, Filter, Calendar, User, MapPin, Phone, Star } from 'lucide-react'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  const fetchAllOrders = async () => {
    if (!token) {
      return null
    }

    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
        setFilteredOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', 
        { orderId, status: event.target.value }, 
        { headers: { token } }
      )
      if (response.data.success) {
        await fetchAllOrders()
        toast.success('Order status updated successfully')
      }
    } catch (error) {
      console.log(error)
      toast.error('Failed to update order status')
    }
  }

  // Filter orders
  useEffect(() => {
    let filtered = orders

    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.address.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.address.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order._id.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'All') {
      filtered = filtered.filter(order => order.status === statusFilter)
    }

    setFilteredOrders(filtered)
  }, [searchTerm, statusFilter, orders])

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Order Placed': return <Clock className="w-4 h-4" />
      case 'Packing': return <Package className="w-4 h-4" />
      case 'Shipped': return <Truck className="w-4 h-4" />
      case 'Out for delivery': return <Truck className="w-4 h-4" />
      case 'Delivered': return <CheckCircle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Order Placed': return 'status-info'
      case 'Packing': return 'status-warning'
      case 'Shipped': return 'bg-blue-50 text-blue-600'
      case 'Out for delivery': return 'bg-purple-50 text-purple-600'
      case 'Delivered': return 'status-success'
      default: return 'status-info'
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-admin-accent-600 to-admin-accent-700 rounded-2xl flex items-center justify-center">
            <Package className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="font-display text-3xl font-bold text-admin-primary-900">Order Management</h1>
            <p className="text-admin-primary-600">Track and manage customer orders</p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="dashboard-stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-admin-primary-600 text-sm font-medium">Total Orders</p>
                <p className="text-2xl font-bold text-admin-primary-900">{orders.length}</p>
              </div>
              <Package className="w-8 h-8 text-admin-accent-600" />
            </div>
          </div>
          
          <div className="dashboard-stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-admin-primary-600 text-sm font-medium">Pending</p>
                <p className="text-2xl font-bold text-admin-warning-600">{orders.filter(o => o.status === 'Order Placed').length}</p>
              </div>
              <Clock className="w-8 h-8 text-admin-warning-600" />
            </div>
          </div>
          
          <div className="dashboard-stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-admin-primary-600 text-sm font-medium">Shipped</p>
                <p className="text-2xl font-bold text-blue-600">{orders.filter(o => o.status === 'Shipped').length}</p>
              </div>
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="dashboard-stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-admin-primary-600 text-sm font-medium">Delivered</p>
                <p className="text-2xl font-bold text-admin-success-600">{orders.filter(o => o.status === 'Delivered').length}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-admin-success-600" />
            </div>
          </div>
          
          <div className="dashboard-stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-admin-primary-600 text-sm font-medium">Revenue</p>
                <p className="text-2xl font-bold text-admin-primary-900">₹{orders.reduce((acc, order) => acc + order.amount, 0).toLocaleString()}</p>
              </div>
              <Star className="w-8 h-8 text-admin-accent-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="admin-card p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-admin-primary-400" />
            <input
              type="text"
              placeholder="Search by customer name or order ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="admin-input pl-12"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-admin-primary-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="admin-select pl-12 min-w-48"
            >
              <option value="All">All Statuses</option>
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {filteredOrders.map((order, index) => (
          <div key={index} className="admin-card-elevated p-8 hover:shadow-admin-large transition-all duration-300">
            
            {/* Order Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 pb-6 border-b border-admin-primary-100">
              <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                <div className="w-12 h-12 bg-gradient-to-br from-admin-accent-100 to-admin-accent-200 rounded-2xl flex items-center justify-center">
                  <Package className="w-6 h-6 text-admin-accent-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-admin-primary-900">Order #{order._id.slice(-8).toUpperCase()}</h3>
                  <div className="flex items-center space-x-4 text-sm text-admin-primary-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(order.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {order.address.firstName} {order.address.lastName}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="font-bold text-2xl text-admin-primary-900">{currency}{order.amount}</div>
                  <div className="text-sm text-admin-primary-600">{order.items.length} items</div>
                </div>
                <div className={`status-badge ${getStatusColor(order.status)} flex items-center space-x-2 px-4 py-2`}>
                  {getStatusIcon(order.status)}
                  <span className="font-semibold">{order.status}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Order Items */}
              <div className="lg:col-span-2">
                <h4 className="font-semibold text-admin-primary-900 mb-4 flex items-center">
                  <Package className="w-5 h-5 mr-2 text-admin-accent-600" />
                  Order Items
                </h4>
                <div className="space-y-3">
                  {order.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-4 bg-admin-primary-25 rounded-xl p-4">
                      <div className="w-16 h-16 bg-admin-primary-100 rounded-xl overflow-hidden">
                        <img 
                          src={item.image?.[0] || '/placeholder-image.jpg'} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-admin-primary-900">{item.name}</h5>
                        <div className="flex items-center space-x-4 text-sm text-admin-primary-600 mt-1">
                          <span>Size: {item.size}</span>
                          <span>Qty: {item.quantity}</span>
                          <span className="font-semibold">{currency}{item.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer & Delivery Info */}
              <div className="space-y-6">
                
                {/* Customer Info */}
                <div className="bg-admin-primary-25 rounded-2xl p-6">
                  <h4 className="font-semibold text-admin-primary-900 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-admin-accent-600" />
                    Customer Details
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-admin-primary-900">{order.address.firstName} {order.address.lastName}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-admin-primary-500 mt-0.5 flex-shrink-0" />
                      <div className="text-admin-primary-600">
                        <div>{order.address.street}</div>
                        <div>{order.address.city}, {order.address.state}</div>
                        <div>{order.address.country} - {order.address.zipcode}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-admin-primary-500" />
                      <span className="text-admin-primary-600">{order.address.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="bg-admin-primary-25 rounded-2xl p-6">
                  <h4 className="font-semibold text-admin-primary-900 mb-4">Payment Details</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-admin-primary-600">Method:</span>
                      <span className="font-medium text-admin-primary-900">{order.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-admin-primary-600">Status:</span>
                      <span className={`status-badge ${order.payment ? 'status-success' : 'status-warning'}`}>
                        {order.payment ? 'Paid' : 'Pending'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-admin-primary-600">Amount:</span>
                      <span className="font-bold text-lg text-admin-primary-900">{currency}{order.amount}</span>
                    </div>
                  </div>
                </div>

                {/* Status Update */}
                <div className="bg-admin-accent-50 rounded-2xl p-6 border border-admin-accent-100">
                  <h4 className="font-semibold text-admin-primary-900 mb-4">Update Status</h4>
                  <select
                    onChange={(event) => statusHandler(event, order._id)}
                    value={order.status}
                    className="admin-select"
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <div className="admin-card text-center py-16">
          <Package className="w-16 h-16 text-admin-primary-300 mx-auto mb-4" />
          <h3 className="font-semibold text-xl text-admin-primary-900 mb-2">No orders found</h3>
          <p className="text-admin-primary-600">
            {searchTerm || statusFilter !== 'All' 
              ? 'Try adjusting your search or filter criteria' 
              : 'Orders will appear here when customers make purchases'
            }
          </p>
        </div>
      )}

      {/* Summary */}
      {filteredOrders.length > 0 && (
        <div className="mt-8 admin-card p-6">
          <div className="text-center text-admin-primary-600">
            Showing {filteredOrders.length} of {orders.length} orders
          </div>
        </div>
      )}
    </div>
  )
}

export default Orders
