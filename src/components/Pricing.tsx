import React from 'react';
import { Check } from 'lucide-react';
import type { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 29,
    features: ['5 Projects', 'Basic Analytics', 'Email Support', '1GB Storage']
  },
  {
    name: 'Professional',
    price: 99,
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '10GB Storage'],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 299,
    features: ['Custom Solutions', 'Dedicated Support', 'SLA Agreement', 'Unlimited Storage']
  }
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 inline-block text-transparent bg-clip-text">Pricing Plans</h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-2 sm:mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 sm:p-8 transform transition-all duration-300 hover:-translate-y-2 ${tier.recommended
                ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl scale-100 sm:scale-105'
                : 'bg-white hover:shadow-xl'
                }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{tier.name}</h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-3xl sm:text-5xl font-bold">${tier.price}</span>
                <span className="text-sm opacity-80">/month</span>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <div className={`p-1 rounded-full ${tier.recommended ? 'bg-white/20' : 'bg-blue-100'}`}>
                      <Check className={`w-3 h-3 sm:w-4 sm:h-4 ${tier.recommended ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${tier.recommended
                  ? 'bg-white text-blue-600 hover:bg-blue-50'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90'
                  }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}