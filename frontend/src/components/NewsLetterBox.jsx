import React, { useState } from 'react'
import { Mail, Gift, Sparkles, Crown, Star, Heart, ShieldCheck } from 'lucide-react'

const NewsLetterBox = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 4000)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-neutral-900 to-accent-900 relative overflow-hidden">
      
      {/* Luxury background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-400 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-400 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        
        {/* Luxury Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl mb-8 shadow-luxury">
          <div className="relative">
            <Mail className="w-12 h-12 text-white" strokeWidth={1.5} />
            <Crown className="absolute -top-2 -right-2 w-6 h-6 text-accent-400" />
          </div>
        </div>

        {/* Luxury Heading */}
        <div className="mb-6">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-accent-400 mr-2" fill="currentColor" />
            <span className="text-accent-300 font-semibold tracking-wide uppercase">Exclusive VIP Access</span>
          </div>
          
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Join Our
            <span className="block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              Elite Circle
            </span>
          </h2>
        </div>
        
        <p className="text-primary-100 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Become part of our exclusive community and unlock premium benefits including early access to collections, 
          personal styling consultations, and members-only events.
        </p>

        {/* Luxury Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <Gift className="w-8 h-8 text-accent-400 mx-auto mb-3" />
            <div className="text-white font-semibold mb-1">25% Off First Order</div>
            <div className="text-primary-200 text-sm">Exclusive welcome discount</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <Sparkles className="w-8 h-8 text-accent-400 mx-auto mb-3" />
            <div className="text-white font-semibold mb-1">Early Access</div>
            <div className="text-primary-200 text-sm">Preview new collections first</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <Crown className="w-8 h-8 text-accent-400 mx-auto mb-3" />
            <div className="text-white font-semibold mb-1">VIP Events</div>
            <div className="text-primary-200 text-sm">Exclusive fashion shows</div>
          </div>
        </div>

        {/* Newsletter Form */}
        {!isSubscribed ? (
          <form onSubmit={onSubmitHandler} className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-luxury rounded-3xl p-8 shadow-luxury-lg border border-white/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for VIP access"
                  className="flex-1 px-8 py-5 rounded-2xl border-0 focus:outline-none focus:ring-4 focus:ring-accent-500/30 text-primary-900 placeholder-neutral-500 shadow-soft text-lg bg-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-accent-500 to-accent-700 text-white px-10 py-5 rounded-2xl font-semibold hover:from-accent-600 hover:to-accent-800 transition-all duration-300 shadow-luxury hover:shadow-luxury-lg hover:scale-105 text-lg"
                >
                  Join Elite Circle
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="bg-white/15 backdrop-blur-luxury rounded-3xl p-10 max-w-2xl mx-auto shadow-luxury-lg border border-white/20 animate-scale-in">
            <div className="flex items-center justify-center text-white mb-4">
              <Crown className="w-8 h-8 mr-3 text-accent-400" />
              <span className="font-display text-2xl font-bold">Welcome to the Elite Circle!</span>
            </div>
            <p className="text-primary-100 text-lg mb-4">
              Your VIP access has been activated. Check your email for your exclusive 25% discount code.
            </p>
            <div className="flex items-center justify-center space-x-6 text-accent-300 text-sm">
              <span className="flex items-center"><Gift className="w-4 h-4 mr-1" /> Discount Applied</span>
              <span className="flex items-center"><Sparkles className="w-4 h-4 mr-1" /> VIP Activated</span>
              <span className="flex items-center"><Heart className="w-4 h-4 mr-1" /> Welcome Gift Sent</span>
            </div>
          </div>
        )}

        {/* Trust indicators */}
        <div className="mt-12 text-primary-200 text-sm flex items-center justify-center space-x-8">
          <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1" /> Secure & Private</span>
          <span className="flex items-center"><Heart className="w-4 h-4 mr-1" /> No Spam Promise</span>
          <span className="flex items-center"><Crown className="w-4 h-4 mr-1" /> 50,000+ VIP Members</span>
        </div>
      </div>
    </section>
  )
}

export default NewsLetterBox
