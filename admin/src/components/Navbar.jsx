import React from 'react'
import { assets } from '../assets/assets'
import { LogOut, Settings, Bell, User, Crown } from 'lucide-react'

const Navbar = ({ setToken }) => {
  return (
    <nav className="bg-white border-b border-admin-primary-200 shadow-admin-soft">
      <div className="px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-admin-accent-600 to-admin-accent-700 rounded-2xl flex items-center justify-center shadow-admin-medium">
                <span className="text-white font-display text-xl font-bold">S</span>
              </div>
              <Crown className="absolute -top-1 -right-1 w-5 h-5 text-admin-accent-500" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-admin-primary-900">SanjayShop</h1>
              <p className="text-sm text-admin-primary-500 tracking-wide uppercase">Admin Dashboard</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            
            {/* Notifications */}
            <button className="relative p-3 text-admin-primary-600 hover:text-admin-accent-600 hover:bg-admin-accent-50 rounded-xl transition-all duration-200">
              <Bell className="w-5 h-5" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-admin-error-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Settings */}
            <button className="p-3 text-admin-primary-600 hover:text-admin-accent-600 hover:bg-admin-accent-50 rounded-xl transition-all duration-200">
              <Settings className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Admin Profile */}
            <div className="flex items-center space-x-3 bg-admin-primary-50 rounded-xl px-4 py-2">
              <div className="w-8 h-8 bg-gradient-to-br from-admin-accent-500 to-admin-accent-600 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-white" strokeWidth={1.5} />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-admin-primary-900">Admin User</div>
                <div className="text-xs text-admin-primary-500">Super Administrator</div>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={() => setToken('')}
              className="flex items-center space-x-2 bg-admin-error-50 text-admin-error-600 hover:bg-admin-error-100 px-4 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-md"
            >
              <LogOut className="w-4 h-4" strokeWidth={1.5} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar