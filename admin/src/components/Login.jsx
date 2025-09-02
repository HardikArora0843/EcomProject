import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { Crown, Mail, Lock, Shield, Sparkles, Eye, EyeOff } from 'lucide-react'

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      setIsLoading(true)
      
      const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
      if (response.data.success) {
        setToken(response.data.token)
        toast.success('Welcome to Admin Dashboard!')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-admin-primary-50 via-white to-admin-accent-50 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-admin-accent-600 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-admin-primary-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-admin-accent-400 rounded-full"></div>
      </div>

      <div className="w-full max-w-lg relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-admin-accent-600 to-admin-accent-700 rounded-3xl mb-6 shadow-admin-xl">
            <Crown className="w-12 h-12 text-white" strokeWidth={1.5} />
          </div>
          
          <h1 className="font-display text-4xl font-bold text-admin-primary-900 mb-3">
            Admin Dashboard
          </h1>
          <p className="text-admin-primary-600 text-lg">
            Access your premium store management system
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-4xl shadow-admin-xl border border-admin-primary-100 overflow-hidden">
          
          {/* Card Header */}
          <div className="bg-gradient-to-r from-admin-accent-600 to-admin-accent-700 text-white p-8 text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold tracking-wide uppercase">Secure Access</span>
            </div>
            <h2 className="font-display text-2xl font-bold mb-2">Administrator Login</h2>
            <p className="text-admin-accent-100">Enter your credentials to continue</p>
          </div>

          {/* Form */}
          <div className="p-8">
            <form onSubmit={onSubmitHandler} className="space-y-6">
              
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-admin-primary-700 mb-3">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-admin-primary-400" strokeWidth={1.5} />
                  </div>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="admin-input pl-12"
                    type="email"
                    placeholder="admin@sanjayshop.com"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-admin-primary-700 mb-3">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-admin-primary-400" strokeWidth={1.5} />
                  </div>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="admin-input pl-12 pr-12"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your secure password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-admin-primary-400 hover:text-admin-primary-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-admin-accent-600 to-admin-accent-700 text-white py-4 rounded-2xl font-semibold text-lg tracking-wide transition-all duration-300 hover:from-admin-accent-700 hover:to-admin-accent-800 hover:shadow-admin-large hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-8"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                    Authenticating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    Access Dashboard
                    <Crown className="w-5 h-5 ml-3" />
                  </div>
                )}
              </button>
            </form>

            {/* Security Notice */}
            <div className="mt-8 bg-admin-accent-50 rounded-2xl p-4 border border-admin-accent-100">
              <div className="flex items-center text-admin-accent-700 text-sm">
                <Shield className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>This is a secure admin area. All activities are logged and monitored.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-admin-primary-100 shadow-admin-soft">
            <Package className="w-8 h-8 text-admin-accent-600 mx-auto mb-3" />
            <div className="font-semibold text-admin-primary-900 mb-1">Product Management</div>
            <div className="text-admin-primary-600 text-sm">Advanced inventory control</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-admin-primary-100 shadow-admin-soft">
            <BarChart3 className="w-8 h-8 text-admin-accent-600 mx-auto mb-3" />
            <div className="font-semibold text-admin-primary-900 mb-1">Analytics</div>
            <div className="text-admin-primary-600 text-sm">Real-time insights</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-admin-primary-100 shadow-admin-soft">
            <Users className="w-8 h-8 text-admin-accent-600 mx-auto mb-3" />
            <div className="font-semibold text-admin-primary-900 mb-1">Customer Care</div>
            <div className="text-admin-primary-600 text-sm">Premium support tools</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login