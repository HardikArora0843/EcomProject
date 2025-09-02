import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { Search, ShoppingBag, User, Menu, X, Heart, Crown } from 'lucide-react'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <>
      {/* Luxury announcement bar */}
      <div className="bg-gradient-to-r from-primary-900 via-neutral-900 to-accent-900 text-white text-center py-3">
        <div className="flex items-center justify-center space-x-2">
          <Crown className="w-4 h-4 text-accent-400" />
          <span className="text-sm font-medium tracking-wide">Complimentary shipping on orders above ₹999 • Premium returns within 30 days</span>
          <Crown className="w-4 h-4 text-accent-400" />
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white/95 backdrop-blur-luxury border-b border-neutral-100 sticky top-0 z-50 shadow-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-900 to-accent-600 rounded-2xl flex items-center justify-center shadow-luxury group-hover:shadow-luxury-lg transition-all duration-300">
                  <span className="text-white font-display text-xl font-bold">S</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full animate-pulse-slow"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-primary-900 tracking-tight">EcomShop</span>
                <span className="text-xs text-neutral-500 tracking-widest uppercase">Premium Fashion</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <NavLink to="/" className="nav-link text-base">
                Home
              </NavLink>
              <NavLink to="/collection" className="nav-link text-base">
                Collection
              </NavLink>
              <NavLink to="/about" className="nav-link text-base">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link text-base">
                Contact
              </NavLink>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              
              {/* Search */}
              <button
                onClick={() => setShowSearch(true)}
                className="p-3 text-neutral-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <Search size={22} strokeWidth={1.5} />
              </button>

              {/* Wishlist */}
              <button className="p-3 text-neutral-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200 hover:scale-105 relative">
                <Heart size={22} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              {/* User Profile */}
              <div className="relative group">
                <button
                  onClick={() => token ? null : navigate('/login')}
                  className="p-3 text-neutral-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <User size={22} strokeWidth={1.5} />
                </button>

                {/* Luxury Dropdown Menu */}
                {token && (
                  <div className="absolute right-0 top-full mt-3 w-64 bg-white/95 backdrop-blur-luxury rounded-2xl shadow-luxury border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-2">
                      <div className="px-4 py-3 border-b border-neutral-100">
                        <div className="font-semibold text-primary-900">Welcome back!</div>
                        <div className="text-sm text-neutral-500">Manage your account</div>
                      </div>
                      <button className="w-full text-left px-4 py-3 text-neutral-700 hover:bg-primary-50 rounded-xl transition-all duration-200 flex items-center space-x-3">
                        <User className="w-4 h-4" />
                        <span>My Profile</span>
                      </button>
                      <button
                        onClick={() => navigate('/orders')}
                        className="w-full text-left px-4 py-3 text-neutral-700 hover:bg-primary-50 rounded-xl transition-all duration-200 flex items-center space-x-3"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>My Orders</span>
                      </button>
                      <hr className="my-2 border-neutral-100" />
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-3 text-error-600 hover:bg-error-50 rounded-xl transition-all duration-200 flex items-center space-x-3"
                      >
                        <X className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Shopping Cart */}
              <Link to="/cart" className="relative p-3 text-neutral-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200 hover:scale-105">
                <ShoppingBag size={22} strokeWidth={1.5} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-bounce-gentle shadow-lg">
                    {getCartCount()}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setVisible(true)}
                className="lg:hidden p-3 text-neutral-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Luxury Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`fixed right-0 top-0 h-full w-96 bg-white/95 backdrop-blur-luxury shadow-luxury-lg transform transition-transform duration-500 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
            
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-8 border-b border-neutral-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-900 to-accent-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-display text-lg font-bold">S</span>
                </div>
                <span className="font-display text-xl font-bold text-primary-900">Menu</span>
              </div>
              <button
                onClick={() => setVisible(false)}
                className="p-2 text-neutral-600 hover:text-primary-900 hover:bg-primary-50 rounded-xl transition-all duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile menu items */}
            <div className="py-8 px-6">
              <div className="space-y-2">
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/"
                  className="block px-6 py-4 text-neutral-700 hover:text-primary-900 hover:bg-primary-50 font-medium transition-all duration-200 rounded-xl"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/collection"
                  className="block px-6 py-4 text-neutral-700 hover:text-primary-900 hover:bg-primary-50 font-medium transition-all duration-200 rounded-xl"
                >
                  Collection
                </NavLink>
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/about"
                  className="block px-6 py-4 text-neutral-700 hover:text-primary-900 hover:bg-primary-50 font-medium transition-all duration-200 rounded-xl"
                >
                  About
                </NavLink>
                <NavLink
                  onClick={() => setVisible(false)}
                  to="/contact"
                  className="block px-6 py-4 text-neutral-700 hover:text-primary-900 hover:bg-primary-50 font-medium transition-all duration-200 rounded-xl"
                >
                  Contact
                </NavLink>
              </div>
            </div>

            {/* Mobile menu footer */}
            {token && (
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-neutral-100">
                <button
                  onClick={() => {
                    logout()
                    setVisible(false)
                  }}
                  className="w-full bg-error-50 text-error-600 py-4 rounded-xl font-semibold hover:bg-error-100 transition-all duration-200"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
