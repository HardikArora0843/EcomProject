import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Calculator, Truck, Crown } from 'lucide-react'

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="w-6 h-6 text-accent-600" />
        <h3 className="font-display text-2xl font-semibold text-primary-900">Cart Summary</h3>
      </div>

      {/* Calculation Details */}
      <div className="space-y-4">
        
        {/* Subtotal */}
        <div className="flex justify-between items-center py-3 border-b border-neutral-100">
          <span className="text-neutral-600 font-medium">Subtotal</span>
          <span className="font-semibold text-primary-900 text-lg">{currency}{getCartAmount()}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between items-center py-3 border-b border-neutral-100">
          <div className="flex items-center space-x-2">
            <Truck className="w-4 h-4 text-primary-600" />
            <span className="text-neutral-600 font-medium">Premium Shipping</span>
          </div>
          <span className="font-semibold text-primary-900 text-lg">
            {getCartAmount() >= 999 ? (
              <span className="text-success-600">FREE</span>
            ) : (
              `${currency}${delivery_fee}`
            )}
          </span>
        </div>

        {/* Discount */}
        {getCartAmount() >= 999 && (
          <div className="flex justify-between items-center py-3 border-b border-neutral-100">
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-accent-600" />
              <span className="text-accent-600 font-medium">VIP Discount</span>
            </div>
            <span className="font-semibold text-success-600 text-lg">-{currency}{delivery_fee}</span>
          </div>
        )}

        {/* Total */}
        <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-6 border border-accent-100">
          <div className="flex justify-between items-center">
            <span className="font-display text-xl font-bold text-primary-900">Total Amount</span>
            <span className="font-display text-3xl font-bold text-primary-900">
              {currency}{getCartAmount() === 0 ? 0 : getCartAmount() + (getCartAmount() >= 999 ? 0 : delivery_fee)}
            </span>
          </div>
          
          {getCartAmount() < 999 && getCartAmount() > 0 && (
            <div className="mt-3 text-sm text-neutral-600 text-center">
              Add {currency}{999 - getCartAmount()} more for free shipping
            </div>
          )}
        </div>

        {/* Savings Indicator */}
        {getCartAmount() >= 999 && (
          <div className="bg-success-50 rounded-2xl p-4 border border-success-200">
            <div className="flex items-center justify-center text-success-700">
              <Crown className="w-5 h-5 mr-2" />
              <span className="font-semibold">You saved {currency}{delivery_fee} on shipping!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTotal