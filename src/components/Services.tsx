import React from 'react';
import { Code, Palette, Globe, Zap } from 'lucide-react';
import type { ServiceCard } from '../types';

const services: ServiceCard[] = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    icon: Code
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that convert',
    icon: Palette
  },
  {
    title: 'Global Reach',
    description: 'Reach customers worldwide with optimized solutions',
    icon: Globe
  },
  {
    title: 'Performance',
    description: 'Lightning-fast applications that scale with your needs',
    icon: Zap
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-xl inline-block mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}