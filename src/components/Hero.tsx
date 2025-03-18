import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="image.png"
          alt="Background Animation"
          className="absolute w-full h-full object-cover transform scale-105"
          style={{
            filter: 'brightness(0.4) saturate(1.2)',
            transition: 'transform 20s linear'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-overlay"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight animate-float">
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Presence</span>
          </h1>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            We build exceptional digital experiences that drive growth and innovation, taking your vision to new heights.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold flex items-center gap-3 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};