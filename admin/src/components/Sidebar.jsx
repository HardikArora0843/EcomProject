import React from 'react'
import { NavLink } from 'react-router-dom'
import { Plus, Package, ShoppingCart, BarChart3, Users, Settings, Crown, Sparkles } from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    {
      path: '/add',
      icon: Plus,
      label: 'Add Products',
      description: 'Create new items'
    },
    {
      path: '/list',
      icon: Package,
      label: 'Product List',
      description: 'Manage inventory'
    },
    {
      path: '/orders',
      icon: ShoppingCart,
      label: 'Orders',
      description: 'Order management'
    }
  ]

  return (
    <aside className="w-80 bg-white border-r border-admin-primary-200 shadow-admin-soft min-h-screen">
      
      {/* Sidebar Header */}
      <div className="p-6 border-b border-admin-primary-100">
        <div className="bg-gradient-to-r from-admin-accent-50 to-admin-accent-100 rounded-2xl p-4">
          <div className="flex items-center space-x-3 mb-2">
            <Crown className="w-6 h-6 text-admin-accent-600" />
            <span className="font-display text-lg font-semibold text-admin-primary-900">Admin Panel</span>
          </div>
          <p className="text-sm text-admin-primary-600">Manage your premium store</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-6">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `admin-nav-link group ${isActive ? 'active' : ''}`
              }
            >
              <div className="w-10 h-10 bg-admin-primary-100 rounded-xl flex items-center justify-center group-hover:bg-admin-accent-100 transition-colors duration-200">
                <item.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="font-semibold">{item.label}</div>
                <div className="text-xs text-admin-primary-500 group-hover:text-admin-accent-600 transition-colors duration-200">
                  {item.description}
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 bg-gradient-to-br from-admin-accent-50 to-admin-primary-50 rounded-2xl p-6 border border-admin-accent-100">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="w-5 h-5 text-admin-accent-600" />
            <span className="font-semibold text-admin-primary-900">Quick Stats</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-admin-primary-600">Total Products</span>
              <span className="font-semibold text-admin-primary-900">1,247</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-admin-primary-600">Pending Orders</span>
              <span className="font-semibold text-admin-accent-600">23</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-admin-primary-600">Revenue Today</span>
              <span className="font-semibold text-admin-success-600">₹45,230</span>
            </div>
          </div>
        </div>

        {/* Premium Features */}
        <div className="mt-6 bg-gradient-to-br from-admin-accent-600 to-admin-accent-700 rounded-2xl p-6 text-white">
          <div className="flex items-center space-x-2 mb-3">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Premium Features</span>
          </div>
          <p className="text-admin-accent-100 text-sm mb-4">
            Unlock advanced analytics and automation tools
          </p>
          <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-xl font-medium transition-all duration-200">
            Upgrade Now
          </button>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar