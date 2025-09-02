import React from 'react'
import { Sparkles } from 'lucide-react'

const Title = ({ text1, text2, subtitle, center = true, luxury = false }) => {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12`}>
      
      {/* Luxury indicator */}
      {luxury && (
        <div className={`inline-flex items-center bg-accent-50 rounded-full px-4 py-2 mb-6 ${center ? 'justify-center' : ''}`}>
          <Sparkles className="w-4 h-4 text-accent-600 mr-2" />
          <span className="text-sm font-semibold text-accent-800 tracking-wide uppercase">Premium Selection</span>
        </div>
      )}
      
      {/* Main Title */}
      <div className={`${center ? 'flex items-center justify-center' : 'flex items-center'} gap-4 mb-6`}>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 tracking-tight">
          {text1} 
          {text2 && (
            <span className="block sm:inline text-gradient-luxury ml-0 sm:ml-4">
              {text2}
            </span>
          )}
        </h2>
      </div>
      
      {/* Subtitle */}
      {subtitle && (
        <p className="text-neutral-600 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
      
      {/* Decorative Line */}
      <div className={`relative mt-8 ${center ? 'flex justify-center' : ''}`}>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent-600 to-transparent rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent-600 rounded-full"></div>
      </div>
    </div>
  )
}

export default Title