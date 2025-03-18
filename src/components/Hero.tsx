import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/image.png"
          alt="Background Animation"
          className="absolute w-full h-full object-cover transform scale-105"
          style={{
            filter: 'brightness(0.4) saturate(1.2)',
            transition: 'transform 20s linear'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-overlay"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 leading-tight animate-float text-center sm:text-left">
            Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block sm:inline">
              Digital Presence
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-12 leading-relaxed text-center sm:text-left max-w-xl mx-auto sm:mx-0">
            We build exceptional digital experiences that drive growth and innovation, taking your vision to new heights.
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-2 sm:gap-3 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
              Get Started <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};