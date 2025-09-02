import React, { useEffect, useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Crown, Mail, Lock, User, Sparkles, Shield } from 'lucide-react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Welcome to SanjayShop!')
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Welcome back!')
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center py-12 px-6 relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary-600 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-accent-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary-400 rounded-full"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        
        {/* Luxury Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-900 to-accent-600 rounded-3xl mb-6 shadow-luxury">
            <Crown className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="font-display text-4xl font-bold text-primary-900 mb-3">
            {currentState === 'Login' ? 'Welcome Back' : 'Join Our Elite'}
          </h1>
          
          <p className="text-neutral-600 text-lg">
            {currentState === 'Login' 
              ? 'Access your premium fashion account' 
              : 'Create your luxury shopping experience'
            }
          </p>
        </div>

        {/* Luxury Form Card */}
        <div className="bg-white/80 backdrop-blur-luxury rounded-4xl shadow-luxury-lg border border-neutral-100 p-10">
          
          {/* Form Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-accent-50 rounded-full px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 text-accent-600 mr-2" />
              <span className="text-sm font-semibold text-accent-800 tracking-wide uppercase">
                {currentState === 'Login' ? 'Member Access' : 'VIP Registration'}
              </span>
            </div>
          </div>

          <form onSubmit={onSubmitHandler} className="space-y-6">
            
            {/* Name Field (Sign Up only) */}
            {currentState === 'Sign Up' && (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-neutral-400" strokeWidth={1.5} />
                </div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Full Name"
                  className="input-luxury pl-12"
                  required
                />
              </div>
            )}

            {/* Email Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-neutral-400" strokeWidth={1.5} />
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email Address"
                className="input-luxury pl-12"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-neutral-400" strokeWidth={1.5} />
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="input-luxury pl-12"
                required
              />
            </div>

            {/* Form Footer */}
            <div className="flex justify-between items-center text-sm pt-2">
              <button type="button" className="text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200">
                Forgot Password?
              </button>
              
              <button
                type="button"
                onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                {currentState === 'Login' ? 'Create Account' : 'Sign In Instead'}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary-900 to-accent-600 text-white py-5 rounded-2xl font-semibold text-lg tracking-wide transition-all duration-300 hover:from-primary-800 hover:to-accent-500 hover:shadow-luxury hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-8"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  Processing...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  {currentState === 'Login' ? 'Access Account' : 'Join Elite Circle'}
                  <Crown className="w-5 h-5 ml-3" />
                </div>
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-primary-50 rounded-2xl border border-primary-100">
            <div className="flex items-center justify-center text-primary-700 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              <span>Your information is protected with bank-level security</span>
            </div>
          </div>
        </div>

        {/* Benefits Preview */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Gift className="w-8 h-8 text-accent-400 mx-auto mb-3" />
            <div className="text-white font-semibold mb-1">Exclusive Discounts</div>
            <div className="text-primary-200 text-sm">Up to 40% off premium items</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Sparkles className="w-8 h-8 text-accent-400 mx-auto mb-3" />
            <div className="text-white font-semibold mb-1">Early Access</div>
            <div className="text-primary-200 text-sm">Preview collections 48hrs early</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Heart className="w-8 h-8 text-accent-400 mx-auto mb-3" />
            <div className="text-white font-semibold mb-1">Personal Styling</div>
            <div className="text-primary-200 text-sm">Complimentary style consultations</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
